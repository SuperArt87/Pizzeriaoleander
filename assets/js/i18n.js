// Pizzeria Oleander — shared translations, menu data and language switching

export const PIZZAS = [
  {
    id: 'margherita',
    price: 11.5,
    name: { nl: 'Margherita', en: 'Margherita' },
    desc: {
      nl: 'San Marzano tomaat, fior di latte mozzarella, verse basilicum, olijfolie',
      en: 'San Marzano tomato, fior di latte mozzarella, fresh basil, olive oil'
    },
    tag: { nl: 'Vegetarisch', en: 'Vegetarian' }
  },
  {
    id: 'marinara',
    price: 9.5,
    name: { nl: 'Marinara', en: 'Marinara' },
    desc: {
      nl: 'San Marzano tomaat, knoflook, oregano, extra vergine olijfolie',
      en: 'San Marzano tomato, garlic, oregano, extra virgin olive oil'
    },
    tag: { nl: 'Vegan', en: 'Vegan' }
  },
  {
    id: 'diavola',
    price: 13.5,
    name: { nl: 'Diavola', en: 'Diavola' },
    desc: {
      nl: 'Tomaat, mozzarella, pittige salami, verse chilipeper',
      en: 'Tomato, mozzarella, spicy salami, fresh chilli'
    },
    tag: { nl: 'Pittig', en: 'Spicy' }
  },
  {
    id: 'prosciutto-funghi',
    price: 13.0,
    name: { nl: 'Prosciutto e Funghi', en: 'Prosciutto e Funghi' },
    desc: {
      nl: 'Tomaat, mozzarella, gekookte ham, champignons',
      en: 'Tomato, mozzarella, cooked ham, mushrooms'
    },
    tag: { nl: 'Favoriet', en: 'Favourite' }
  },
  {
    id: 'quattro-formaggi',
    price: 13.5,
    name: { nl: 'Quattro Formaggi', en: 'Quattro Formaggi' },
    desc: {
      nl: 'Mozzarella, gorgonzola, parmigiano reggiano, taleggio',
      en: 'Mozzarella, gorgonzola, parmigiano reggiano, taleggio'
    },
    tag: { nl: 'Vegetarisch', en: 'Vegetarian' }
  }
];

export const translations = {
  nl: {
    'meta.title': 'Pizzeria Oleander — Napolitaanse pizza om af te halen in Leusden',
    'nav.menu': 'Menu',
    'nav.hours': 'Openingstijden',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.order': 'Bestellen',
    'hero.eyebrow': 'Napolitaanse pizza · Afhalen · Leusden',
    'hero.title': 'Vuur, deeg en \ntijd van 48 uur.',
    'hero.subtitle': 'Elke vrijdag bakken wij authentieke Napolitaanse pizza’s op traditionele wijze. Uitsluitend om af te halen.',
    'hero.cta': 'Bekijk het menu',
    'hero.cta2': 'Openingstijden',
    'menu.eyebrow': 'Ons menu',
    'menu.title': 'Vijf pizza’s, puur gehouden',
    'menu.subtitle': 'Traditioneel gerezen deeg (48 uur), San Marzano tomaten en verse mozzarella — meer heeft een goede pizza niet nodig.',
    'menu.qty': 'Aantal',
    'menu.summary.title': 'Jouw bestelling',
    'menu.summary.empty': 'Nog niets geselecteerd. Kies hierboven je pizza’s.',
    'menu.summary.total': 'Totaal',
    'menu.summary.items': 'stuks',
    'menu.summary.cta': 'Bestellen',
    'menu.summary.note': 'Afhalen uitsluitend op vrijdag tussen 17:00–19:00',
    'hours.eyebrow': 'Praktisch',
    'hours.title': 'Openingstijden & adres',
    'hours.subtitle': 'We bakken maar één dag per week — zo houden we het vers en persoonlijk.',
    'hours.day.mon': 'Maandag', 'hours.day.tue': 'Dinsdag', 'hours.day.wed': 'Woensdag',
    'hours.day.thu': 'Donderdag', 'hours.day.fri': 'Vrijdag', 'hours.day.sat': 'Zaterdag', 'hours.day.sun': 'Zondag',
    'hours.closed': 'Gesloten',
    'hours.friday.time': '17:00 – 19:00',
    'hours.only': 'Alleen op vrijdag geopend, uitsluitend voor afhalen',
    'address.title': 'Adres',
    'address.line1': 'Hamershof 12',
    'address.line2': '3831 EX Leusden',
    'address.directions': 'Routebeschrijving',
    'address.phone': 'Telefoon',
    'reviews.eyebrow': 'Wat gasten zeggen',
    'reviews.title': 'Beoordeeld door de buurt',
    'footer.tagline': 'Napolitaanse pizza, traditioneel gebakken. Elke vrijdag vers in Leusden.',
    'footer.links': 'Snel naar',
    'footer.contact': 'Contact',
    'footer.hours.title': 'Vrijdag',
    'footer.rights': 'Alle rechten voorbehouden.',
    'order.back': 'Terug naar menu',
    'order.eyebrow': 'Bijna klaar',
    'order.title': 'Bestelling afronden',
    'order.subtitle': 'Vul je gegevens in, dan hebben wij je pizza’s vrijdag warm klaarstaan.',
    'order.summary.title': 'Overzicht bestelling',
    'order.summary.total': 'Totaal',
    'order.summary.empty': 'Je hebt nog geen pizza’s geselecteerd.',
    'order.summary.backlink': 'Ga terug naar het menu om pizza’s te kiezen.',
    'order.form.name': 'Naam',
    'order.form.namePlaceholder': 'Voor- en achternaam',
    'order.form.phone': 'Telefoonnummer',
    'order.form.phonePlaceholder': '06 12 34 56 78',
    'order.form.pickup': 'Voorkeur ophaaltijd',
    'order.form.pickupHint': 'Uitsluitend vrijdag tussen 17:00 en 19:00',
    'order.form.notes': 'Opmerkingen (optioneel)',
    'order.form.notesPlaceholder': 'Allergieën, opmerkingen…',
    'order.form.submit': 'Bestelling plaatsen',
    'order.form.required': 'Verplicht veld',
    'order.form.invalidPhone': 'Voer een geldig telefoonnummer in',
    'order.confirm.title': 'Bedankt voor je bestelling!',
    'order.confirm.body': 'We hebben je bestelling ontvangen en bakken hem vers op vrijdag. Je ontvangt een bevestiging per telefoon indien nodig.',
    'order.confirm.ref': 'Referentie',
    'order.confirm.back': 'Terug naar de website',
    'lang.switchTo': 'EN'
  },
  en: {
    'meta.title': 'Pizzeria Oleander — Neapolitan pizza to take away in Leusden',
    'nav.menu': 'Menu',
    'nav.hours': 'Opening hours',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.order': 'Order',
    'hero.eyebrow': 'Neapolitan pizza · Takeaway · Leusden',
    'hero.title': 'Fire, dough and \n48 hours of time.',
    'hero.subtitle': 'Every Friday we bake authentic Neapolitan pizzas the traditional way. Takeaway only.',
    'hero.cta': 'View the menu',
    'hero.cta2': 'Opening hours',
    'menu.eyebrow': 'Our menu',
    'menu.title': 'Five pizzas, kept honest',
    'menu.subtitle': 'A 48-hour slow-risen dough, San Marzano tomatoes and fresh mozzarella — a good pizza doesn’t need more.',
    'menu.qty': 'Quantity',
    'menu.summary.title': 'Your order',
    'menu.summary.empty': 'Nothing selected yet. Choose your pizzas above.',
    'menu.summary.total': 'Total',
    'menu.summary.items': 'items',
    'menu.summary.cta': 'Order',
    'menu.summary.note': 'Pickup only on Friday between 17:00–19:00',
    'hours.eyebrow': 'Good to know',
    'hours.title': 'Opening hours & address',
    'hours.subtitle': 'We bake just one day a week — that’s what keeps it fresh and personal.',
    'hours.day.mon': 'Monday', 'hours.day.tue': 'Tuesday', 'hours.day.wed': 'Wednesday',
    'hours.day.thu': 'Thursday', 'hours.day.fri': 'Friday', 'hours.day.sat': 'Saturday', 'hours.day.sun': 'Sunday',
    'hours.closed': 'Closed',
    'hours.friday.time': '17:00 – 19:00',
    'hours.only': 'Open Fridays only, takeaway only',
    'address.title': 'Address',
    'address.line1': 'Hamershof 12',
    'address.line2': '3831 EX Leusden',
    'address.directions': 'Get directions',
    'address.phone': 'Phone',
    'reviews.eyebrow': 'What guests say',
    'reviews.title': 'Rated by the neighbourhood',
    'footer.tagline': 'Neapolitan pizza, baked the traditional way. Fresh in Leusden every Friday.',
    'footer.links': 'Quick links',
    'footer.contact': 'Contact',
    'footer.hours.title': 'Friday',
    'footer.rights': 'All rights reserved.',
    'order.back': 'Back to menu',
    'order.eyebrow': 'Almost there',
    'order.title': 'Complete your order',
    'order.subtitle': 'Fill in your details and we’ll have your pizzas ready and warm on Friday.',
    'order.summary.title': 'Order summary',
    'order.summary.total': 'Total',
    'order.summary.empty': 'You haven’t selected any pizzas yet.',
    'order.summary.backlink': 'Go back to the menu to choose your pizzas.',
    'order.form.name': 'Name',
    'order.form.namePlaceholder': 'First and last name',
    'order.form.phone': 'Phone number',
    'order.form.phonePlaceholder': '06 12 34 56 78',
    'order.form.pickup': 'Preferred pickup time',
    'order.form.pickupHint': 'Friday between 17:00 and 19:00 only',
    'order.form.notes': 'Notes (optional)',
    'order.form.notesPlaceholder': 'Allergies, remarks…',
    'order.form.submit': 'Place order',
    'order.form.required': 'Required field',
    'order.form.invalidPhone': 'Please enter a valid phone number',
    'order.confirm.title': 'Thank you for your order!',
    'order.confirm.body': 'We’ve received your order and will bake it fresh on Friday. We’ll call if we need to reach you.',
    'order.confirm.ref': 'Reference',
    'order.confirm.back': 'Back to the website',
    'lang.switchTo': 'NL'
  }
};

const STORAGE_LANG = 'oleander_lang';
const STORAGE_CART = 'oleander_cart';

export function getLang() {
  return localStorage.getItem(STORAGE_LANG) || 'nl';
}

export function setLang(lang) {
  localStorage.setItem(STORAGE_LANG, lang);
}

export function t(key, lang) {
  const dict = translations[lang] || translations.nl;
  return dict[key] ?? key;
}

export function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = t('meta.title', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key, lang);
    el.innerHTML = value.replace(/\n/g, '<br>');
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key, lang));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', t(key, lang));
  });

  document.querySelectorAll('[data-lang-label]').forEach((el) => {
    el.textContent = t('lang.switchTo', lang);
  });
}

export function initLangToggle(onChange) {
  const lang = getLang();
  applyTranslations(lang);
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = getLang() === 'nl' ? 'en' : 'nl';
      setLang(next);
      applyTranslations(next);
      if (typeof onChange === 'function') onChange(next);
    });
  });
}

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CART)) || {};
  } catch {
    return {};
  }
}

export function setCart(cart) {
  localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
}

export function formatPrice(value) {
  return '€ ' + value.toFixed(2).replace('.', ',');
}
