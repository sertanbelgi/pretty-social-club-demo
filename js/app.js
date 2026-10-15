/* Shared site code: i18n (TR/EN), header/footer, helpers. */
const DICT = {
  tr: {
    'nav.events': 'Etkinlikler', 'nav.gallery': 'Galeri', 'nav.about': 'Hakkımızda', 'nav.tickets': 'Bilet Al',
    'hero.eyebrow': 'Wellness · Connection · Balance',
    'hero.title': 'İyi hisset, yeni insanlarla tanış, <span class="script">güzel anlar</span> biriktir.',
    'hero.lead': 'Pilates, padel, workshoplar ve daha fazlası. Güzel insanlarla, güzel mekânlarda küçük topluluk buluşmaları.',
    'hero.cta1': 'Etkinlikleri Gör', 'hero.cta2': 'Nasıl Çalışır',
    'hero.scroll': 'Keşfet',
    'home.upcoming': 'Yaklaşan Etkinlikler', 'home.upcoming.sub': 'Yerini ayırt, gerisini bize bırak.',
    'home.all': 'Tüm Etkinlikler',
    'home.exp': 'Neler Yapıyoruz?', 'home.exp.sub': 'Hareket, lezzet ve sohbet; hepsi bir arada.',
    'exp.pilates': 'Pilates', 'exp.padel': 'Padel', 'exp.workshop': 'Workshop & Brunch', 'exp.social': 'Yeni Dostluklar',
    'home.how': 'Nasıl Çalışır?', 'home.how.sub': 'Üç adımda etkinliğe hazırsın.',
    'how.1.t': 'Etkinliğini seç', 'how.1.d': 'Tarih, program ve paketleri incele; sana uyan etkinliği bul.',
    'how.2.t': 'Biletini al', 'how.2.d': 'Üyelik gerekmez. Adın, e-postan ve telefonunla birkaç saniyede tamamla.',
    'how.3.t': 'QR ile gel', 'how.3.d': 'Biletin QR kodlu olarak sana ulaşır; girişte okutman yeterli.',
    'home.gallery': 'Anlardan Kareler', 'home.gallery.more': 'Tüm Galeri',
    'ig.title': 'Bizi <span class="script">Instagram</span>’da takip et', 'ig.text': 'Duyurular, yeni etkinlikler ve anılar için @prettysocial.club hesabına göz at.', 'ig.cta': 'Instagram’a Git',
    'events.title': 'Etkinlikler', 'events.sub': 'Kontenjanlar sınırlı. Yerini ayırtmak için bir etkinlik seç.',
    'events.upcoming': 'Yaklaşan', 'events.past': 'Geçmiş Etkinlikler',
    'events.none': 'Şu an planlanmış etkinlik yok. Yakında yenileri geliyor, bizi takip et!',
    'card.from': 'Başlangıç', 'card.details': 'Detaylar', 'chip.soldout': 'Tükendi', 'chip.ended': 'Sona erdi', 'chip.few': 'Son yerler',
    'ev.when': 'Tarih & Saat', 'ev.where': 'Konum', 'ev.packages': 'Paket Seç', 'ev.qty': 'Adet', 'ev.buy': 'Bilet Al',
    'ev.about': 'Etkinlik Hakkında', 'ev.program': 'Program', 'ev.left': 'son {n} yer', 'ev.soldout': 'Tükendi', 'ev.ended': 'Bu etkinlik sona erdi.',
    'ev.seats2': '{n} kişilik', 'ev.notfound': 'Etkinlik bulunamadı.', 'ev.back': 'Tüm etkinlikler',
    'co.title': 'Satın Alma', 'co.contact': 'İletişim Bilgileri', 'co.name': 'Ad Soyad', 'co.email': 'E-posta', 'co.phone': 'Telefon',
    'co.hint': 'Biletin e-posta veya telefonuna gönderilecek.', 'co.pay': 'Ödeme',
    'co.demo': 'Bu bir gösterim sürümüdür: gerçek ödeme alınmaz ve kart bilgisi girmeniz gerekmez.',
    'co.card': 'Kart Numarası', 'co.exp': 'SKT', 'co.cvc': 'CVC',
    'co.terms': 'Katılım koşullarını ve kişisel verilerimin etkinlik organizasyonu amacıyla işlenmesini kabul ediyorum.',
    'co.submit': 'Satın Al (Demo)', 'co.summary': 'Sipariş Özeti', 'co.total': 'Toplam', 'co.processing': 'İşleniyor…',
    'co.err.terms': 'Devam etmek için koşulları kabul etmelisiniz.', 'co.err.generic': 'Bir sorun oluştu, lütfen tekrar deneyin.',
    'tk.title': 'Biletin hazır', 'tk.sub': 'Girişte QR kodunu okutman yeterli. Bu sayfanın bağlantısını sakla.',
    'tk.ticket': 'Bilet', 'tk.order': 'Sipariş', 'tk.save': 'Yazdır / PDF Kaydet', 'tk.used': 'Kullanıldı',
    'tk.note': 'Gösterim sürümü: e-posta/SMS gönderimi canlıya geçişte devreye girecek. Biletlerine bu bağlantıdan her zaman ulaşabilirsin.',
    'tk.notfound': 'Sipariş bulunamadı.', 'tk.admit': 'kişilik giriş',
    'gal.title': 'Galeri', 'gal.sub': 'Etkinliklerimizden güzel anlar.',
    'about.title': 'Hakkımızda', 'about.sub': 'Güzel anlar, güzel insanlar.',
    'about.story.t': 'Küçük bir topluluk, büyük bir iyi hissetme hali',
    'about.story.p1': 'Pretty Social Club; hareketi, lezzeti ve sohbeti bir araya getiren etkinlikler düzenleyen bir topluluk. Teknede pilates, padel sahasında bowl workshop ya da mum ışığında balkabağı boyama; her buluşma yeni insanlarla tanışmak ve kendine iyi gelmek için bir fırsat.',
    'about.story.p2': 'Etkinliklerimiz küçük gruplarla, özenle hazırlanmış detaylarla ve samimi bir atmosferle tasarlanıyor. Tek başına gelmen yeterli; geri kalanı bizde.',
    'val.1.t': 'Wellness', 'val.1.d': 'Bedenini ve zihnini iyi hissettiren hareket ve ritüeller.',
    'val.2.t': 'Connection', 'val.2.d': 'Yeni insanlarla, doğal ve samimi bağlar.',
    'val.3.t': 'Balance', 'val.3.d': 'Eğlence ve dinlenme arasında güzel bir denge.',
    'footer.about': 'Wellness · Connection · Balance. Güzel anlar, güzel insanlar.', 'footer.menu': 'Sayfalar', 'footer.follow': 'Takip Et',
    'footer.rights': '© 2026 Pretty Social Club. Tüm hakları saklıdır.', 'footer.demo': 'Gösterim sürümü',
    'loading.err': 'Yüklenemedi. Lütfen sayfayı yenileyin.',
  },
  en: {
    'nav.events': 'Events', 'nav.gallery': 'Gallery', 'nav.about': 'About', 'nav.tickets': 'Get Tickets',
    'hero.eyebrow': 'Wellness · Connection · Balance',
    'hero.title': 'Feel good, meet new people, collect <span class="script">pretty moments</span>.',
    'hero.lead': 'Pilates, padel, workshops and more. Small community gatherings with lovely people in lovely places.',
    'hero.cta1': 'See Events', 'hero.cta2': 'How It Works',
    'hero.scroll': 'Discover',
    'home.upcoming': 'Upcoming Events', 'home.upcoming.sub': 'Save your spot, we’ll take care of the rest.',
    'home.all': 'All Events',
    'home.exp': 'What We Do', 'home.exp.sub': 'Movement, good food and conversation, all in one place.',
    'exp.pilates': 'Pilates', 'exp.padel': 'Padel', 'exp.workshop': 'Workshops & Brunch', 'exp.social': 'New Friendships',
    'home.how': 'How It Works', 'home.how.sub': 'Ready for an event in three steps.',
    'how.1.t': 'Pick your event', 'how.1.d': 'Browse dates, programs and packages, then find the one that suits you.',
    'how.2.t': 'Get your ticket', 'how.2.d': 'No account needed. Just your name, email and phone, done in seconds.',
    'how.3.t': 'Show your QR', 'how.3.d': 'Your QR ticket reaches you; just scan it at the entrance.',
    'home.gallery': 'Moments', 'home.gallery.more': 'Full Gallery',
    'ig.title': 'Follow us on <span class="script">Instagram</span>', 'ig.text': 'Announcements, new events and memories at @prettysocial.club.', 'ig.cta': 'Go to Instagram',
    'events.title': 'Events', 'events.sub': 'Spots are limited. Choose an event to reserve yours.',
    'events.upcoming': 'Upcoming', 'events.past': 'Past Events',
    'events.none': 'No events planned right now. New ones are coming soon, follow us!',
    'card.from': 'From', 'card.details': 'Details', 'chip.soldout': 'Sold out', 'chip.ended': 'Ended', 'chip.few': 'Last spots',
    'ev.when': 'Date & Time', 'ev.where': 'Location', 'ev.packages': 'Choose a Package', 'ev.qty': 'Quantity', 'ev.buy': 'Get Tickets',
    'ev.about': 'About the Event', 'ev.program': 'Program', 'ev.left': '{n} left', 'ev.soldout': 'Sold out', 'ev.ended': 'This event has ended.',
    'ev.seats2': '{n} people', 'ev.notfound': 'Event not found.', 'ev.back': 'All events',
    'co.title': 'Checkout', 'co.contact': 'Contact Details', 'co.name': 'Full Name', 'co.email': 'Email', 'co.phone': 'Phone',
    'co.hint': 'Your ticket will be sent to your email or phone.', 'co.pay': 'Payment',
    'co.demo': 'This is a demo: no real payment is taken and you don’t need to enter card details.',
    'co.card': 'Card Number', 'co.exp': 'Expiry', 'co.cvc': 'CVC',
    'co.terms': 'I accept the participation terms and the processing of my personal data for organising the event.',
    'co.submit': 'Buy Now (Demo)', 'co.summary': 'Order Summary', 'co.total': 'Total', 'co.processing': 'Processing…',
    'co.err.terms': 'Please accept the terms to continue.', 'co.err.generic': 'Something went wrong, please try again.',
    'tk.title': 'Your tickets are ready', 'tk.sub': 'Just show the QR code at the entrance. Keep a link to this page.',
    'tk.ticket': 'Ticket', 'tk.order': 'Order', 'tk.save': 'Print / Save as PDF', 'tk.used': 'Used',
    'tk.note': 'Demo version: email/SMS delivery will be enabled at launch. You can always return to this link to find your tickets.',
    'tk.notfound': 'Order not found.', 'tk.admit': 'person admission',
    'gal.title': 'Gallery', 'gal.sub': 'Pretty moments from our events.',
    'about.title': 'About Us', 'about.sub': 'Pretty moments, pretty people.',
    'about.story.t': 'A small community with a big feel-good energy',
    'about.story.p1': 'Pretty Social Club is a community hosting events that bring movement, good food and conversation together. Pilates on a boat, a bowl workshop on a padel court or pumpkin painting by candlelight: every gathering is a chance to meet new people and treat yourself.',
    'about.story.p2': 'Our events are designed for small groups, with carefully styled details and a warm atmosphere. Just come as you are; we’ll handle the rest.',
    'val.1.t': 'Wellness', 'val.1.d': 'Movement and rituals that make your body and mind feel good.',
    'val.2.t': 'Connection', 'val.2.d': 'Natural, genuine bonds with new people.',
    'val.3.t': 'Balance', 'val.3.d': 'A lovely balance between fun and rest.',
    'footer.about': 'Wellness · Connection · Balance. Pretty moments, pretty people.', 'footer.menu': 'Pages', 'footer.follow': 'Follow',
    'footer.rights': '© 2026 Pretty Social Club. All rights reserved.', 'footer.demo': 'Demo version',
    'loading.err': 'Could not load. Please refresh the page.',
  },
};

const IG = 'https://www.instagram.com/prettysocial.club/';
let lang = 'tr';
try { const s = localStorage.getItem('psc_lang'); if (s === 'tr' || s === 'en') lang = s; } catch {}

export const getLang = () => lang;
export const t = (key, vars = {}) =>
  (DICT[lang][key] ?? DICT.tr[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const pick = (o, field) => o[`${field}_${lang}`] || o[`${field}_tr`] || '';
export const money = (n) => new Intl.NumberFormat(lang === 'tr' ? 'tr-TR' : 'en-US').format(n) + ' TL';
export const fmtDate = (iso, opts = { day: 'numeric', month: 'long', weekday: 'long' }) =>
  new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', opts);
export const fmtTime = (e) => [e.time_start, e.time_end].filter(Boolean).join(' – ');
export const img = (src, alt = '') => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;

export async function api(path, opts) {
  const { demoApi } = await import('/pretty-social-club-demo/js/demo-api.js');
  return demoApi(path, opts);
}

export function eventCard(e) {
  const left = e.packages.reduce((s, p) => s + p.left, 0);
  let chip = '';
  if (e.past) chip = `<span class="chip dark">${t('chip.ended')}</span>`;
  else if (e.soldOut) chip = `<span class="chip dark">${t('chip.soldout')}</span>`;
  else if (left > 0 && left <= 6) chip = `<span class="chip hot">${t('chip.few')}</span>`;
  else chip = `<span class="chip">${esc(fmtDate(e.date, { day: 'numeric', month: 'short' }))}</span>`;
  const price = e.minPrice != null ? `<span class="price"><small>${t('card.from')}</small>${money(e.minPrice)}</span>` : '<span></span>';
  return `<a class="card reveal${e.past ? ' past' : ''}" href="/pretty-social-club-demo/event.html?slug=${encodeURIComponent(e.slug)}">
    <div class="img">${img(e.image, pick(e, 'title'))}${chip}</div>
    <div class="body">
      <h3>${esc(pick(e, 'title'))}</h3>
      <div class="meta"><span>${esc(fmtDate(e.date))}</span>${e.time_start ? `<span>${esc(fmtTime(e))}</span>` : ''}</div>
      <p style="margin:6px 0 0;color:var(--muted)">${esc(pick(e, 'tagline'))}</p>
      <div class="foot">${price}<span class="eyebrow">${t('card.details')} →</span></div>
    </div></a>`;
}

/* ---- layout ---- */
let scrollHandler = null;
function renderHeader() {
  const hero = document.body.dataset.hero === 'true';
  const path = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const link = (href, key) => `<a href="${href}"${path === href || (href === '/pretty-social-club-demo/events.html' && path === '/pretty-social-club-demo/event.html') ? ' class="active"' : ''}>${t(key)}</a>`;
  document.getElementById('site-header').outerHTML = `
  <header class="site-header ${hero ? 'over-hero' : 'solid'}" id="site-header">
    <div class="wrap bar">
      <a class="brand" href="/pretty-social-club-demo/" aria-label="Pretty Social Club"><img src="/pretty-social-club-demo/img/logo-circle.png" alt=""><span>Pretty Social</span></a>
      <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
      <nav class="nav" id="nav">
        ${link('/pretty-social-club-demo/events.html', 'nav.events')}${link('/pretty-social-club-demo/gallery.html', 'nav.gallery')}${link('/pretty-social-club-demo/about.html', 'nav.about')}
        <div class="lang" role="group" aria-label="Language">
          <button data-lang="tr" aria-pressed="${lang === 'tr'}">TR</button><button data-lang="en" aria-pressed="${lang === 'en'}">EN</button>
        </div>
        <a class="btn" href="/pretty-social-club-demo/events.html">${t('nav.tickets')}</a>
      </nav>
    </div>
  </header>`;
  const header = document.getElementById('site-header');
  if (scrollHandler) removeEventListener('scroll', scrollHandler);
  scrollHandler = () => header.classList.toggle('solid', !hero || scrollY > 40);
  if (hero) { scrollHandler(); addEventListener('scroll', scrollHandler, { passive: true }); }
  const burger = header.querySelector('.burger'), nav = header.querySelector('.nav');
  burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) nav.classList.remove('open'); });
  header.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.outerHTML = `<footer class="site-footer" id="site-footer"><div class="wrap">
    <div class="cols">
      <div><a class="brand" href="/pretty-social-club-demo/"><img src="/pretty-social-club-demo/img/logo-circle.png" alt=""><span>Pretty Social</span></a><p style="max-width:320px">${t('footer.about')}</p></div>
      <div><h4>${t('footer.menu')}</h4><a href="/pretty-social-club-demo/events.html">${t('nav.events')}</a><a href="/pretty-social-club-demo/gallery.html">${t('nav.gallery')}</a><a href="/pretty-social-club-demo/about.html">${t('nav.about')}</a></div>
      <div><h4>${t('footer.follow')}</h4><a href="${IG}" target="_blank" rel="noopener">Instagram @prettysocial.club</a></div>
    </div>
    <div class="legal"><span>${t('footer.rights')}</span><span>${t('footer.demo')}</span></div>
  </div></footer>`;
}

export function reveal(root = document) {
  const els = root.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(':'); el.setAttribute(attr, t(key));
  });
}

let onLang = () => {};
export function setLang(l) {
  lang = l;
  try { localStorage.setItem('psc_lang', l); } catch {}
  renderHeader(); renderFooter(); applyStatic(); onLang(); reveal();
}

/** Call once per page. `render` is re-run whenever the language changes. */
export function boot(render = () => {}) {
  onLang = render;
  renderHeader(); renderFooter(); applyStatic();
  render();
  reveal();
}
