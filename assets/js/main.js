/* GHPL EDITABLE CONFIG — update likely-to-change labels, statuses, and contact details here. */
const GHPL_CONFIG = {
  companyName: 'GHOST PROTOCOL LABS',
  shortName: 'GHPL',
  tagline: 'Unseen. Unheard. Unrelenting.',
  engagementStatus: 'Authorized engagements only',
  established: '[TBD]',
  contact: { email: '[REDACTED]', phone: '[REDACTED]', secure: '[REDACTED]' },
  FREE_LINKS: {
    github_writeups: '',
    twitter: '',
    instagram: '',
    facebook: '',
    events_page: 'events.html',
    substack: '',
    beehiiv: '',
    activities: 'https://ghost-protocol-lab.github.io/Damn_Practical_Activities/',
    discord: '',
    reddit: '',
    telegram: ''
  },
  tools: [
    { id: 'GH-001', name: 'GHOSTGRID', status: 'PLANNED', target: '[TBD]' },
    { id: 'GH-002', name: 'GHOSTPROXY', status: 'PLANNED', target: '[TBD]' },
    { id: 'GH-003', name: 'GHOSTPROBE', status: 'PLANNED', target: '[TBD]' },
    { id: 'GH-004', name: 'GHOSTPERSONA', status: 'PLANNED', target: '[TBD]' },
    { id: 'GH-005', name: 'GHOSTFORGE', status: 'PLANNED', target: '[TBD]' },
    { id: 'GH-006', name: 'GHOSTDEFENDER', status: 'PLANNED', target: '[TBD]' }
  ],
  pricing: [
    { name: 'Web/App Pentest', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Defined application scope', 'Prioritized findings report', 'Debrief and retest policy'] },
    { name: 'Network Pentest', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Defined network scope', 'Risk-prioritized report', 'Debrief and retest policy'] },
    { name: 'Full Red Team Engagement', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Objective-led engagement plan', 'Executive and technical reporting', 'Debrief and retest policy'] },
    { name: 'Social Engineering and Physical', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Approved scenarios and boundaries', 'Scenario-based report', 'Debrief and retest policy'] },
    { name: 'Retainer (ongoing)', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Agreed recurring scope', 'Ongoing reporting cadence', 'Review and adjustment points'] },
    { name: 'Custom Tool Development', price: '[PRICE TBD]', duration: '[TBD]', includes: ['Defined requirements', 'Agreed delivery documentation', 'Handoff and debrief'] }
  ],
  pricingFaq: {
    scoping: 'We start with a scoping call to understand objectives, boundaries, systems, timing, and deliverables.',
    retest: '[TBD] — retest terms are agreed during scoping and documented before execution.',
    delivery: 'Reports are delivered through an agreed secure channel after the engagement and debrief process.'
  },
  sampleReports: [
    { title: 'Web Application Pentest Sample Report', file: 'downloads/sample-web-application-pentest.html', type: 'MOCK / WEB' },
    { title: 'Network Pentest Sample Report', file: 'downloads/sample-network-pentest.html', type: 'MOCK / NETWORK' },
    { title: 'Red Team Engagement Sample Report', file: 'downloads/sample-red-team-engagement.html', type: 'MOCK / RED TEAM' },
    { title: 'Executive Summary Sample', file: 'downloads/sample-executive-summary.html', type: 'MOCK / EXECUTIVE' }
  ],
  pastEngagements: [
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' },
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' },
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' },
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' },
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' },
    { type: '[REDACTED]', year: '[REDACTED]', client: '[REDACTED]', summary: '[REDACTED]' }
  ],
  trophies: [
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' },
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' },
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' },
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' },
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' },
    { title: '[REDACTED]', imageLabel: '[IMAGE PLACEHOLDER]', storyLabel: '[FULL STORY PLACEHOLDER]' }
  ],
  achievements: [
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' },
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' },
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' },
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' },
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' },
    { title: '[REDACTED]', year: '[REDACTED]', detail: '[REDACTED]' }
  ]
};

const ghostLogo = `<svg viewBox="0 0 200 220" focusable="false" aria-hidden="true"><path d="M100 18C52 18 26 55 26 102v78l24-15 25 20 25-20 25 20 25-20 24 15v-78c0-47-26-84-74-84Z"/><circle cx="70" cy="101" r="7"/><circle cx="130" cy="101" r="7"/><path d="M76 137c15 10 33 10 48 0"/></svg>`;

function redacted(label = '[REDACTED]') {
  return `<span class="redacted" aria-label="Redacted">${label}</span>`;
}

function placeholder(label = '[PLACEHOLDER]') {
  return `<div class="placeholder" role="img" aria-label="${label}"><span>${label}</span></div>`;
}

function renderNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    ['index.html', 'Home'], ['about.html', 'About'], ['services.html', 'Services'], ['pricing.html', 'Pricing'],
    ['sample-reports.html', 'Reports'], ['tools.html', 'Tools'], ['free.html', 'Free Stuff'], ['events.html', 'Events'], ['contact.html', 'Contact']
  ];
  const navLinks = links.map(([href, label]) => `<a href="${href}" class="${href === 'free.html' ? 'nav-free ' : ''}${currentPage === href ? 'is-current' : ''}">${label}</a>`).join('');
  const target = document.querySelector('[data-site-nav]');
  if (target) target.innerHTML = `<header class="site-header"><a class="brand" href="index.html" aria-label="GHPL home"><span class="brand__mark">${ghostLogo}</span><span><strong>GHPL</strong><small>GHOST PROTOCOL LABS</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><b class="sr-only">Toggle navigation</b></button><nav id="site-menu" class="site-nav" aria-label="Main navigation">${navLinks}<a class="nav-cta" href="contact.html">Begin a scope <span aria-hidden="true">↗</span></a></nav></header>`;
}

function renderFooter() {
  const target = document.querySelector('[data-site-footer]');
  if (target) target.innerHTML = `<div class="free-banner" data-free-banner role="region" aria-label="Free resources"><span class="free-banner__message">Learning is free. Explore our free resources.</span><div class="free-banner__actions"><a class="button button--quiet" href="free.html">Free Stuff <span aria-hidden="true">↗</span></a><button class="free-banner__dismiss" type="button" data-dismiss-free-banner>Dismiss</button></div></div><footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand__mark">${ghostLogo}</span><span><strong>GHPL</strong><small>GHOST PROTOCOL LABS</small></span></a><p>Authorized engagements only.<br>We were never here.</p></div><div class="footer-links"><p class="eyebrow">EXPLORE</p><a href="about.html">About + Mission</a><a href="services.html">Services</a><a href="pricing.html">Pricing</a><a href="sample-reports.html">Sample Reports</a><a href="tools.html">Tools</a><a href="free.html">Free Stuff</a><a href="events.html">Events</a><a href="contact.html">Contact</a></div><div class="footer-links"><p class="eyebrow">THE ARCHIVE</p><a href="past-engagements.html">Past Engagements</a><a href="trophy-room.html">Trophy Room</a><a href="achievements.html">Achievements</a></div></div><div class="footer-bottom mono"><span>© ${new Date().getFullYear()} ${GHPL_CONFIG.shortName}</span><span>${GHPL_CONFIG.engagementStatus.toUpperCase()}</span><span>NO UNAUTHORIZED ACCESS</span></div></footer>`;
}

function freeLinkControl(key, label) {
  const url = GHPL_CONFIG.FREE_LINKS[key] || '';
  const text = label || key.replace(/_/g, ' ');
  if (!url) return `<button class="free-link free-link--disabled" type="button" disabled aria-disabled="true">[LINK NOT SET]</button>`;
  const external = /^https?:\/\//i.test(url);
  return `<a class="free-link" href="${url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text} <span aria-hidden="true">${external ? '↗' : '→'}</span></a>`;
}

function eventDate(value, options = {}) {
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
    ...options
  }).format(new Date(value));
}

function eventCard(event) {
  const image = event.coverImage ? `<img src="${event.coverImage}" alt="${event.title} cover image">` : '<div class="placeholder event-card__image"><span>[IMAGE PLACEHOLDER]</span></div>';
  return `<article class="event-card ghost-card" id="event-${event.id}">${image}<div class="event-card__body"><div class="event-card__top"><span class="pill">${event.type}</span><span class="mono">${eventDate(event.start)}</span></div><h3>${event.title}</h3><p>${event.summary}</p><dl class="event-card__meta"><dt>MODE</dt><dd>${event.mode}</dd><dt>LOCATION</dt><dd>${event.location}</dd></dl><div class="event-tags">${event.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><button class="button button--quiet" type="button" data-event-id="${event.id}">View Details <span aria-hidden="true">↗</span></button></div></article>`;
}

function renderFreeEventPreview() {
  const target = document.querySelector('[data-free-event-preview]');
  if (!target || typeof GHPL_EVENTS === 'undefined') return;
  const next = GHPL_EVENTS.filter((event) => new Date(event.start) >= new Date()).sort((a, b) => new Date(a.start) - new Date(b.start))[0];
  target.innerHTML = next ? `<p class="eyebrow">NEXT EVENT</p><h3>${next.title}</h3><p class="mono">${eventDate(next.start)} / ${next.mode}</p><a class="button button--quiet" href="events.html#event-${next.id}">View event <span aria-hidden="true">↗</span></a>` : '<p class="mono">NO EVENTS ANNOUNCED YET</p>';
}

function renderFreeStuff() {
  document.querySelectorAll('[data-free-link]').forEach((target) => { target.innerHTML = freeLinkControl(target.dataset.freeLink, target.dataset.linkLabel); });
  renderFreeEventPreview();
  document.querySelectorAll('[data-social-links]').forEach((target) => { const icons = { twitter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>', instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r=".7"/></svg>', facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 20v-7h2.5l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5H17V4.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V10H8.5v3H11v7"/></svg>', discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7.5c4-2 8-2 12 0l1.5 9c-3 2-4.5 2-6 0-1 .5-2 .5-3 0-1.5 2-3 2-6 0L6 7.5Z"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></svg>', reddit: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="7"/><path d="M8 16c2 1.5 6 1.5 8 0M9 12h.1M15 12h.1M12 6l1-3 3 1"/></svg>', telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 16-6-4 14-4-5-4 3 1-5-5-1Z"/></svg>' }; target.innerHTML = target.dataset.socialLinks.split(',').map((key) => `<span class="social-control">${icons[key]}${freeLinkControl(key, key[0].toUpperCase() + key.slice(1))}</span>`).join(''); });
  const writeups = document.querySelector('[data-writeup-cards]');
  if (writeups) writeups.innerHTML = Array.from({ length: 3 }, () => `<article class="writeup-card ghost-card"><span class="pill">[CATEGORY]</span><h3>[WRITEUP TITLE PLACEHOLDER]</h3><p class="mono">DATE / [TBD]</p><button class="button button--quiet" type="button" disabled>Read</button></article>`).join('');
}

function renderPricing() {
  const cards = document.querySelector('[data-pricing-cards]');
  if (cards) cards.innerHTML = GHPL_CONFIG.pricing.map((item, index) => `<article class="pricing-card ghost-card reveal"><div class="pricing-card__top"><span class="mono">0${index + 1} / ENGAGEMENT</span><span class="mono">SCOPE-LED</span></div><h2>${item.name}</h2><p class="pricing-card__price">${item.price}</p><p class="pricing-card__duration">Typical duration: ${item.duration}</p><ul>${item.includes.map((entry) => `<li>${entry}</li>`).join('')}</ul></article>`).join('');
  Object.entries(GHPL_CONFIG.pricingFaq).forEach(([key, value]) => { const target = document.querySelector(`[data-faq="${key}"]`); if (target) target.textContent = value; });
}

function renderReports() {
  const cards = document.querySelector('[data-report-cards]');
  if (cards) cards.innerHTML = GHPL_CONFIG.sampleReports.map((report, index) => `<article class="report-card ghost-card reveal"><div class="report-card__top"><span class="mono">0${index + 1} / SAMPLE</span><span class="mono">${report.type}</span></div><h2>${report.title}</h2><p>Mock report with fictional data. Printable HTML format.</p><a class="button button--primary" href="${report.file}" download>Download sample <span aria-hidden="true">↓</span></a></article>`).join('');
}

function renderEngagements() {
  const cards = document.querySelector('[data-engagement-cards]');
  if (cards) cards.innerHTML = GHPL_CONFIG.pastEngagements.map((item, index) => `<article class="engagement-card ghost-card reveal"><div class="engagement-card__top"><span class="mono">0${index + 1} / ARCHIVE</span><span class="mono">SANITIZED</span></div><h2>${item.type}</h2><dl class="engagement-card__data"><dt>YEAR</dt><dd>${item.year}</dd><dt>CLIENT</dt><dd>${item.client}</dd><dt>SUMMARY</dt><dd>${item.summary}</dd></dl><button class="button button--quiet" type="button" disabled>Sanitized report - not available yet</button></article>`).join('');
}

function renderTools() {
  const cards = document.querySelector('[data-tool-cards]');
  if (cards) cards.innerHTML = GHPL_CONFIG.tools.map((tool, index) => `<article class="tool-card ghost-card reveal"><div class="tool-card__top mono"><span>0${index + 1} / ${tool.id}</span><span>${tool.status}</span></div><div class="tool-card__icon" aria-hidden="true">GH</div><h2>${tool.name}</h2><dl><dt>STATUS</dt><dd>${tool.status}</dd><dt>TARGET</dt><dd>${tool.target}</dd></dl><p>Capability description <span class="redaction">[REDACTED]</span></p></article>`).join('');
}

function renderTrophies() {
  const cards = document.querySelector('[data-trophy-cards]');
  if (cards) cards.innerHTML = GHPL_CONFIG.trophies.map((item, index) => `<article class="trophy-card ghost-card reveal"><div class="trophy-card__top mono"><span>0${index + 1} / TROPHY</span><span>SEALED</span></div><div class="placeholder" aria-label="${item.imageLabel}">${item.imageLabel}</div><h2 class="trophy-card__title">${item.title}</h2><button class="button button--quiet trophy-card__button" type="button" data-story="${index}">Unveil story <span aria-hidden="true">↗</span></button></article>`).join('');
}

function renderAchievements() {
  const list = document.querySelector('[data-achievement-list]');
  if (list) list.innerHTML = GHPL_CONFIG.achievements.map((item, index) => `<article class="achievement-item ghost-card reveal"><div class="achievement-item__index mono">0${index + 1}</div><div class="achievement-item__body"><div class="achievement-item__meta mono"><span>YEAR / ${item.year}</span><span>STATUS / REDACTED</span></div><h2>${item.title}</h2><p>${item.detail}</p></div><div class="achievement-item__seal" aria-hidden="true">∴</div></article>`).join('');
}

function addCalendarFile(event) {
  const format = (value) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GHPL//Events//EN', 'BEGIN:VEVENT', `UID:${event.id}@ghost-protocol-labs`, `DTSTAMP:${format(new Date().toISOString())}`, `DTSTART:${format(event.start)}`, event.end ? `DTEND:${format(event.end)}` : '', `SUMMARY:${event.title}`, `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`, `LOCATION:${event.location}`, 'END:VEVENT', 'END:VCALENDAR'].filter(Boolean).join('\r\n');
  const link = document.createElement('a'); link.href = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`; link.download = `${event.id}.ics`; link.click();
}

function renderEvents() {
  const filters = document.querySelector('[data-event-filters]');
  const modal = document.querySelector('[data-event-modal]');
  if (typeof GHPL_EVENTS === 'undefined' || !filters || !modal) return;
  modal.hidden = true;
  const now = new Date(); let activeType = 'All'; let activeView = 'upcoming';
  const detail = modal.querySelector('[data-event-detail]');
  const sorted = [...GHPL_EVENTS].sort((a, b) => new Date(a.start) - new Date(b.start));
  const render = () => {
    ['upcoming', 'past'].forEach((view) => { const section = document.querySelector(`[data-event-section="${view}"]`); const target = document.querySelector(`[data-event-cards="${view}"]`); if (!target) return; const events = sorted.filter((event) => (view === 'upcoming' ? new Date(event.start) >= now : new Date(event.start) < now) && (activeType === 'All' || event.type === activeType)); target.innerHTML = events.length ? events.map(eventCard).join('') : '<div class="event-empty ghost-card"><p class="eyebrow">SIGNAL LOST</p><h3>Nothing haunting the calendar yet.</h3><p>Check back when the next community signal appears.</p></div>'; if (section) section.hidden = view !== activeView; });
    document.querySelectorAll('[data-event-id]').forEach((button) => button.addEventListener('click', () => openEvent(button.dataset.eventId)));
  };
  const openEvent = (id) => { const event = GHPL_EVENTS.find((item) => item.id === id); if (!event || !detail) return; detail.innerHTML = `<p class="eyebrow">${event.type} / EVENT DETAILS</p><h2 id="event-modal-title">${event.title}</h2><p class="mono">${eventDate(event.start)}${event.end ? ` — ${eventDate(event.end)}` : ''}</p><p>${event.description}</p><dl class="event-detail__meta"><dt>MODE</dt><dd>${event.mode}</dd><dt>LOCATION</dt><dd>${event.location}</dd><dt>SPEAKERS</dt><dd>${event.speakers.join(', ')}</dd></dl><h3>Agenda</h3><ul class="event-agenda">${event.agenda.map((item) => `<li><span class="mono">${item.time}</span>${item.item}</li>`).join('')}</ul><div class="event-modal__actions">${event.registerUrl ? `<a class="button button--primary" href="${event.registerUrl}" target="_blank" rel="noopener noreferrer">Register ↗</a>` : '<button class="button button--quiet" type="button" disabled>Registration not open yet</button>'}<button class="button button--quiet" type="button" data-add-calendar>Add to Calendar</button></div>`; modal.hidden = false; document.body.classList.add('modal-open'); detail.querySelector('[data-add-calendar]').addEventListener('click', () => addCalendarFile(event)); modal.querySelector('[data-event-close]').focus(); };
  const close = () => { modal.hidden = true; document.body.classList.remove('modal-open'); };
  const types = ['All', ...new Set(GHPL_EVENTS.map((event) => event.type))]; document.querySelector('[data-event-filters]').innerHTML = types.map((type) => `<button type="button" class="${type === 'All' ? 'is-active' : ''}" data-event-type="${type}">${type}</button>`).join(''); document.querySelectorAll('[data-event-type]').forEach((button) => button.addEventListener('click', () => { activeType = button.dataset.eventType; document.querySelectorAll('[data-event-type]').forEach((item) => item.classList.toggle('is-active', item === button)); render(); })); document.querySelectorAll('[data-event-view]').forEach((button) => button.addEventListener('click', () => { activeView = button.dataset.eventView; document.querySelectorAll('[data-event-view]').forEach((item) => item.classList.toggle('is-active', item === button)); render(); })); modal?.querySelectorAll('[data-event-close]').forEach((item) => item.addEventListener('click', close)); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal && !modal.hidden) close(); }); render(); if (window.location.hash.startsWith('#event-')) openEvent(window.location.hash.slice(7));
}

function initStoryModal() {
  const modal = document.querySelector('[data-story-modal]');
  if (!modal) return;
  const title = modal.querySelector('#story-modal-title');
  const openModal = (index) => { title.textContent = GHPL_CONFIG.trophies[index]?.title || '[REDACTED]'; modal.hidden = false; document.body.classList.add('modal-open'); modal.querySelector('[data-modal-close]').focus(); };
  const closeModal = () => { modal.hidden = true; document.body.classList.remove('modal-open'); };
  document.querySelectorAll('[data-story]').forEach((button) => button.addEventListener('click', () => openModal(Number(button.dataset.story))));
  modal.querySelectorAll('[data-modal-close]').forEach((element) => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
}

function initSite() {
  renderNav(); renderFooter(); renderPricing(); renderReports(); renderEngagements(); renderTools(); renderTrophies(); renderAchievements(); renderFreeStuff(); renderEvents(); initStoryModal();
  const dismissBanner = document.querySelector('[data-dismiss-free-banner]');
  dismissBanner?.addEventListener('click', () => document.querySelector('[data-free-banner]')?.remove());
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); menu.classList.toggle('is-open', !open); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }
}

document.addEventListener('DOMContentLoaded', initSite);
