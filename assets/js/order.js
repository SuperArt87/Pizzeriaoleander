import { PIZZAS, getLang, initLangToggle, getCart, setCart, formatPrice, t } from './i18n.js';

function getNextFriday() {
  const now = new Date();
  const day = now.getDay();
  const diff = (5 - day + 7) % 7;
  const friday = new Date(now);
  friday.setDate(now.getDate() + diff);
  return friday;
}

function buildTimeSlots() {
  const slots = [];
  for (let h = 17; h < 19; h++) {
    for (let m = 0; m < 60; m += 15) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return slots;
}

function renderPickupOptions(lang) {
  const select = document.getElementById('pickup-time');
  const friday = getNextFriday();
  const dateLabel = new Intl.DateTimeFormat(lang === 'nl' ? 'nl-NL' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(friday);

  document.getElementById('pickup-date-label').textContent = dateLabel + ',';

  const placeholder = lang === 'nl' ? 'Kies een tijd' : 'Choose a time';
  select.innerHTML =
    `<option value="" disabled selected>${placeholder}</option>` +
    buildTimeSlots().map((s) => `<option value="${s}">${s}</option>`).join('');
}

function renderSummary(lang) {
  const cart = getCart();
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const list = document.getElementById('summary-list');
  const totalEl = document.getElementById('summary-total');
  const emptyEl = document.getElementById('summary-empty');
  const form = document.getElementById('order-form');

  if (entries.length === 0) {
    list.innerHTML = '';
    emptyEl.classList.remove('hidden');
    totalEl.textContent = formatPrice(0);
    form.classList.add('hidden');
    return null;
  }

  emptyEl.classList.add('hidden');
  form.classList.remove('hidden');

  let total = 0;
  list.innerHTML = entries.map(([id, qty]) => {
    const pizza = PIZZAS.find((p) => p.id === id);
    total += pizza.price * qty;
    return `<li class="flex items-center justify-between text-sm py-2">
      <span>${qty}&times; ${pizza.name[lang]}</span>
      <span class="tabular-nums text-ink-soft">${formatPrice(pizza.price * qty)}</span>
    </li>`;
  }).join('');
  totalEl.textContent = formatPrice(total);

  return { entries, total };
}

function setFieldError(field, message) {
  const errorEl = document.getElementById(field.id + '-error');
  if (message) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    field.classList.add('border-terracotta');
  } else {
    errorEl.classList.add('hidden');
    field.classList.remove('border-terracotta');
  }
}

function init() {
  let lang = getLang();
  renderSummary(lang);
  renderPickupOptions(lang);

  initLangToggle((newLang) => {
    lang = newLang;
    renderSummary(lang);
    renderPickupOptions(lang);
  });

  const form = document.getElementById('order-form');
  const nameField = document.getElementById('name');
  const phoneField = document.getElementById('phone');
  const pickupField = document.getElementById('pickup-time');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const summary = renderSummary(lang);
    if (!summary) return;

    let valid = true;

    if (!nameField.value.trim()) {
      setFieldError(nameField, t('order.form.required', lang));
      valid = false;
    } else {
      setFieldError(nameField, null);
    }

    const phoneValue = phoneField.value.trim();
    const phonePattern = /^[0-9+()\s-]{8,}$/;
    if (!phoneValue) {
      setFieldError(phoneField, t('order.form.required', lang));
      valid = false;
    } else if (!phonePattern.test(phoneValue)) {
      setFieldError(phoneField, t('order.form.invalidPhone', lang));
      valid = false;
    } else {
      setFieldError(phoneField, null);
    }

    if (!pickupField.value) {
      setFieldError(pickupField, t('order.form.required', lang));
      valid = false;
    } else {
      setFieldError(pickupField, null);
    }

    if (!valid) return;

    const orderRef = 'OL-' + Date.now().toString().slice(-6);
    document.getElementById('confirm-ref').textContent = orderRef;
    document.getElementById('order-view').classList.add('hidden');
    document.getElementById('confirm-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setCart({});
  });
}

document.addEventListener('DOMContentLoaded', init);
