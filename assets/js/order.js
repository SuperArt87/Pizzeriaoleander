import { PIZZAS, getLang, initLangToggle, getCart, setCart, formatPrice, t } from './i18n.js';
import { ORDERS_API_URL } from './config.js';

function getNextFriday() {
  const now = new Date();
  const day = now.getDay();
  const diff = (5 - day + 7) % 7;
  const friday = new Date(now);
  friday.setDate(now.getDate() + diff);
  return friday;
}

function toISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function buildTimeSlots() {
  const slots = [];
  for (let h = 17; h < 19; h++) {
    for (let m = 0; m < 60; m += 10) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return slots;
}

async function fetchAvailability(isoDate) {
  if (!ORDERS_API_URL) return [];
  try {
    const res = await fetch(`${ORDERS_API_URL}?action=availability&date=${isoDate}`);
    const data = await res.json();
    return data.success ? data.taken : [];
  } catch (err) {
    console.warn('Could not load slot availability, showing all slots as open.', err);
    return [];
  }
}

async function placeOrderRemote(payload) {
  const res = await fetch(ORDERS_API_URL, { method: 'POST', body: JSON.stringify(payload) });
  return res.json();
}

const pickupState = { isoDate: '', taken: [] };

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
  const fullLabel = t('order.form.slotFull', lang);

  select.innerHTML =
    `<option value="" disabled selected>${placeholder}</option>` +
    buildTimeSlots().map((s) => {
      const isTaken = pickupState.taken.includes(s);
      return `<option value="${s}" ${isTaken ? 'disabled' : ''}>${s}${isTaken ? ` (${fullLabel})` : ''}</option>`;
    }).join('');
}

async function refreshAvailability(lang) {
  pickupState.isoDate = toISODate(getNextFriday());
  pickupState.taken = await fetchAvailability(pickupState.isoDate);
  renderPickupOptions(lang);
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

function setSubmitting(isSubmitting, lang) {
  const btn = document.getElementById('submit-btn');
  btn.disabled = isSubmitting;
  btn.textContent = isSubmitting ? t('order.form.submitting', lang) : t('order.form.submit', lang);
}

function showConfirmation(ref) {
  document.getElementById('confirm-ref').textContent = ref;
  document.getElementById('order-view').classList.add('hidden');
  document.getElementById('confirm-view').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function init() {
  let lang = getLang();
  renderSummary(lang);
  refreshAvailability(lang);

  initLangToggle((newLang) => {
    lang = newLang;
    renderSummary(lang);
    renderPickupOptions(lang);
  });

  const form = document.getElementById('order-form');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const postcodeField = document.getElementById('postcode');
  const houseNumberField = document.getElementById('house-number');
  const pickupField = document.getElementById('pickup-time');
  const notesField = document.getElementById('notes');
  const submitError = document.getElementById('submit-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitError.classList.add('hidden');

    const summary = renderSummary(lang);
    if (!summary) return;

    let valid = true;

    if (!nameField.value.trim()) {
      setFieldError(nameField, t('order.form.required', lang));
      valid = false;
    } else {
      setFieldError(nameField, null);
    }

    const emailValue = emailField.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setFieldError(emailField, t('order.form.required', lang));
      valid = false;
    } else if (!emailPattern.test(emailValue)) {
      setFieldError(emailField, t('order.form.invalidEmail', lang));
      valid = false;
    } else {
      setFieldError(emailField, null);
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

    if (!ORDERS_API_URL) {
      // Local-only demo mode: no backend configured yet.
      showConfirmation('OL-' + Date.now().toString().slice(-6));
      setCart({});
      return;
    }

    setSubmitting(true, lang);

    const itemsText = summary.entries
      .map(([id, qty]) => `${qty}x ${PIZZAS.find((p) => p.id === id).name[lang]}`)
      .join(', ');

    try {
      const result = await placeOrderRemote({
        action: 'placeOrder',
        pickupDate: pickupState.isoDate,
        pickupTime: pickupField.value,
        name: nameField.value.trim(),
        email: emailValue,
        phone: phoneValue,
        postcode: postcodeField.value.trim(),
        houseNumber: houseNumberField.value.trim(),
        payment: document.querySelector('input[name="payment"]:checked').value,
        items: itemsText,
        total: formatPrice(summary.total),
        notes: notesField.value.trim()
      });

      if (result.success) {
        showConfirmation(result.ref);
        setCart({});
      } else if (result.error === 'slot_taken') {
        setFieldError(pickupField, t('order.form.slotTaken', lang));
        await refreshAvailability(lang);
      } else {
        submitError.classList.remove('hidden');
      }
    } catch (err) {
      console.error('Order submission failed', err);
      submitError.classList.remove('hidden');
    } finally {
      setSubmitting(false, lang);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
