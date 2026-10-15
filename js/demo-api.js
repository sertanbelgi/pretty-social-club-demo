/* Browser-only stand-in for the /api endpoints, used by the static GitHub Pages demo.
   Orders and tickets live in this browser's localStorage; nothing is sent anywhere. */
import { DEMO } from './demo-data.js';

const KEY = 'psc_demo_state_v1';
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const code = (n) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => ALPHABET[b % ALPHABET.length]).join('');
const fail = (status, error) => Promise.reject(Object.assign(new Error(error), { status }));

function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { orders: {}, sold: {} }; } catch { return { orders: {}, sold: {} }; } }
function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }

const todayIstanbul = () => new Date(Date.now() + 3 * 3600 * 1000).toISOString().slice(0, 10);
const addDays = (iso, n) => new Date(Date.parse(iso + 'T12:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const diffDays = (a, b) => Math.round((Date.parse(a + 'T12:00:00Z') - Date.parse(b + 'T12:00:00Z')) / 86400000);

// Keep the demo's "upcoming" events upcoming no matter when it is opened.
const shift = Math.max(0, diffDays(todayIstanbul(), DEMO.builtOn));
const base = DEMO.base;
const url = (u) => (u && u.startsWith('/') ? base + u : u);

function events() {
  const st = load(), today = todayIstanbul();
  return DEMO.events.map((e) => {
    const date = e.date >= DEMO.builtOn ? addDays(e.date, shift) : e.date;
    const packages = DEMO.packages.filter((p) => p.event_id === e.id).map((p) => {
      const sold = p.sold + (st.sold[p.id] || 0);
      return { ...p, sold, left: Math.max(0, p.capacity - sold) };
    });
    let program = []; try { program = JSON.parse(e.program || '[]'); } catch {}
    const soldOut = packages.length > 0 && packages.every((p) => p.left === 0);
    return { ...e, date, image: url(e.image), program, packages, past: date < today, soldOut,
             minPrice: packages.length ? Math.min(...packages.map((p) => p.price)) : null };
  });
}

export async function demoApi(path, opts = {}) {
  const method = (opts.method || 'GET').toUpperCase();
  let m;
  if (path === '/api/events') {
    const all = events();
    return { upcoming: all.filter((e) => !e.past), past: all.filter((e) => e.past).reverse() };
  }
  if ((m = path.match(/^\/api\/events\/([^/?]+)$/))) {
    const e = events().find((x) => x.slug === decodeURIComponent(m[1]));
    return e || fail(404, 'not found');
  }
  if (path === '/api/gallery') return DEMO.gallery.map((g) => ({ ...g, image: url(g.image) }));

  if (path === '/api/orders' && method === 'POST') {
    const b = JSON.parse(opts.body || '{}');
    const qty = Math.min(10, Math.max(1, Number(b.qty) || 1));
    const pkg = events().flatMap((e) => e.packages.map((p) => ({ ...p, ev: e }))).find((p) => p.id === Number(b.packageId));
    if (!pkg) return fail(404, 'Paket bulunamadı.');
    if (String(b.name || '').trim().length < 2) return fail(400, 'Ad soyad gerekli.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(b.email || '')) return fail(400, 'Geçerli bir e-posta girin.');
    if (String(b.phone || '').replace(/\D/g, '').length < 10) return fail(400, 'Geçerli bir telefon girin.');
    if (pkg.ev.past) return fail(410, 'Bu etkinlik sona erdi.');
    if (pkg.left < qty) return fail(409, 'Yeterli kontenjan kalmadı.');
    const st = load(), orderCode = code(8);
    st.sold[pkg.id] = (st.sold[pkg.id] || 0) + qty;
    st.orders[orderCode] = {
      order: { code: orderCode, qty, name: String(b.name).trim(), total: pkg.price * qty, created_at: new Date().toISOString(), package_tr: pkg.name_tr, package_en: pkg.name_en },
      eventId: pkg.ev.id,
      tickets: Array.from({ length: qty * pkg.seats }, () => ({ code: code(12), used_at: null })),
    };
    save(st);
    return { orderCode };
  }
  if ((m = path.match(/^\/api\/orders\/([^/?]+)$/))) {
    const rec = load().orders[decodeURIComponent(m[1]).toUpperCase()];
    if (!rec) return fail(404, 'not found');
    return { order: rec.order, event: events().find((e) => e.id === rec.eventId), tickets: rec.tickets };
  }
  return fail(404, 'not found');
}
