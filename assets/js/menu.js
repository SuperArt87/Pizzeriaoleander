import { PIZZAS, getLang, initLangToggle, getCart, setCart, formatPrice } from './i18n.js';

function renderPizzas(lang) {
  const grid = document.getElementById('pizza-grid');
  const cart = getCart();

  grid.innerHTML = PIZZAS.map((p) => `
    <article class="rounded-2xl bg-white border border-cream-deep p-5 md:p-6 shadow-card hover:-translate-y-1 transition-transform duration-300">
      <span class="inline-block text-[10px] uppercase tracking-wider font-bold text-olive bg-olive/10 rounded-full px-2.5 py-1 mb-3">${p.tag[lang]}</span>
      <h3 class="font-display text-xl font-medium">${p.name[lang]}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-soft min-h-[3.2rem]">${p.desc[lang]}</p>
      <div class="mt-5 flex items-center justify-between">
        <span class="font-display text-lg font-semibold text-terracotta-deep">${formatPrice(p.price)}</span>
        <div class="flex items-center gap-3">
          <button type="button" class="qty-btn h-9 w-9 rounded-full border border-ink/15 text-lg leading-none flex items-center justify-center hover:bg-pink-pale hover:border-pink-deep/40" data-action="dec" data-id="${p.id}" aria-label="min 1 ${p.name[lang]}">&minus;</button>
          <span class="w-6 text-center font-semibold tabular-nums" data-qty="${p.id}">${cart[p.id] || 0}</span>
          <button type="button" class="qty-btn h-9 w-9 rounded-full bg-terracotta text-white text-lg leading-none flex items-center justify-center hover:bg-terracotta-deep" data-action="inc" data-id="${p.id}" aria-label="plus 1 ${p.name[lang]}">+</button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-action]').forEach((btn) => btn.addEventListener('click', onQtyClick));
}

function onQtyClick(e) {
  const id = e.currentTarget.dataset.id;
  const action = e.currentTarget.dataset.action;
  const cart = getCart();
  const current = cart[id] || 0;
  const next = action === 'inc' ? current + 1 : Math.max(0, current - 1);

  if (next === 0) delete cart[id];
  else cart[id] = next;

  setCart(cart);
  document.querySelector(`[data-qty="${id}"]`).textContent = next;
  renderSummary(getLang());
}

function renderSummary(lang) {
  const cart = getCart();
  const container = document.getElementById('order-summary-list');
  const emptyEl = document.getElementById('order-summary-empty');
  const totalEl = document.getElementById('order-total');
  const cta = document.getElementById('order-cta');
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);

  if (entries.length === 0) {
    container.innerHTML = '';
    emptyEl.classList.remove('hidden');
    totalEl.textContent = formatPrice(0);
    cta.classList.add('pointer-events-none', 'opacity-40');
    cta.setAttribute('aria-disabled', 'true');
    return;
  }

  emptyEl.classList.add('hidden');
  cta.classList.remove('pointer-events-none', 'opacity-40');
  cta.removeAttribute('aria-disabled');

  let total = 0;
  container.innerHTML = entries.map(([id, qty]) => {
    const pizza = PIZZAS.find((p) => p.id === id);
    total += pizza.price * qty;
    return `<li class="flex items-center justify-between text-sm py-1.5">
      <span>${qty}&times; ${pizza.name[lang]}</span>
      <span class="tabular-nums text-ink-soft">${formatPrice(pizza.price * qty)}</span>
    </li>`;
  }).join('');

  totalEl.textContent = formatPrice(total);
}

function init() {
  const lang = getLang();
  renderPizzas(lang);
  renderSummary(lang);

  initLangToggle((newLang) => {
    renderPizzas(newLang);
    renderSummary(newLang);
  });
}

document.addEventListener('DOMContentLoaded', init);
