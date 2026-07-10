// Pizzeria Oleander — shared translations, menu data and language switching

export const PIZZAS = [
  {
    id: 'margherita',
    price: 10,
    name: { nl: 'Margherita', en: 'Margherita' },
    desc: {
      nl: 'Beste tomatensaus, mozzarella, basilicum',
      en: 'Finest tomato sauce, mozzarella, basil'
    },
    tag: { nl: 'Vegetarisch', en: 'Vegetarian' }
  },
  {
    id: 'salami-tartufo',
    price: 12,
    name: { nl: 'Salami Tartufo', en: 'Salami Tartufo' },
    desc: {
      nl: 'Beste tomatensaus, mozzarella, salami tartufo',
      en: 'Finest tomato sauce, mozzarella, truffle salami'
    },
    tag: { nl: 'Favoriet', en: 'Favourite' }
  },
  {
    id: 'caprese-speciale',
    price: 12,
    name: { nl: 'Caprese Speciale', en: 'Caprese Speciale' },
    desc: {
      nl: 'Pesto, gemarineerde tomaatjes, mozzarella, balsamico',
      en: 'Pesto, marinated cherry tomatoes, mozzarella, balsamic'
    },
    tag: { nl: 'Special', en: 'Special' }
  },
  {
    id: 'prosciutto-nduja',
    price: 13,
    name: { nl: 'Prosciutto & Nduja', en: 'Prosciutto & Nduja' },
    desc: {
      nl: 'Beste tomatensaus, mozzarella, parmaham, nduja',
      en: 'Finest tomato sauce, mozzarella, Parma ham, nduja'
    },
    tag: { nl: 'Pittig', en: 'Spicy' }
  },
  {
    id: 'quattro-formaggi',
    price: 13,
    name: { nl: 'Quattro Formaggi', en: 'Quattro Formaggi' },
    desc: {
      nl: 'Mozzarella, gorgonzola, fontina of taleggio, parmigiano reggiano',
      en: 'Mozzarella, gorgonzola, fontina or taleggio, parmigiano reggiano'
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
    'hero.title': 'Authentieke Napolitaanse pizza’s in Leusden. \nHandgemaakt en versgebakken!',
    'hero.subtitle': 'Elke vrijdag. Uitsluitend af te halen.',
    'hero.cta': 'Bekijk het menu',
    'hero.cta2': 'Openingstijden',
    'menu.eyebrow': 'Ons menu',
    'menu.title': 'Huisgemaakt en traditioneel gerezen deeg en authentieke ingrediënten.',
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
    'address.line1': 'Wilhelmina van Pruisenlaan 8',
    'address.line2': '3832 CH Leusden',
    'address.directions': 'Routebeschrijving',
    'address.phone': 'Telefoon',
    'reviews.eyebrow': 'Wat gasten zeggen',
    'reviews.title': 'Beoordeeld door de buurt',
    'story.eyebrow': 'Ons verhaal',
    'story.title': 'Het Verhaal',
    'story.intro': 'Onze liefde voor Italië begon niet in een keuken, maar op reis: de geur van houtvuur, de rust van een dorpsplein, en pizza zoals die daar al generaties lang wordt gemaakt. Die verwondering namen we mee terug naar Leusden — met dezelfde intentie: geen shortcuts, geen compromissen.',
    'story.feature1.stat': '48 uur',
    'story.feature1.title': 'Rijstijd',
    'story.feature1.desc': 'Ons deeg rijst minimaal 48 uur op traditionele Napolitaanse wijze. Dat maakt het luchtig, licht verteerbaar en vol smaak.',
    'story.feature2.stat': '485°C',
    'story.feature2.title': 'Houtoven',
    'story.feature2.desc': 'In een oven van 485°C bakt onze pizza in nog geen 90 seconden — met een krokante bodem en een zachte, luchtige rand, de cornicione.',
    'story.feature3.stat': 'Met de hand',
    'story.feature3.title': 'Geen deegroller',
    'story.feature3.desc': 'Elke bodem wordt met de hand uitgerekt, nooit met een deegroller. Zo blijft de luchtigheid van het deeg behouden.',
    'story.closing': 'Voor ons is pizza geen fastfood, maar ambacht — een eerbetoon aan Napels en aan alles wat de Italiaanse keuken zo bijzonder maakt: eenvoud, geduld en de beste ingrediënten.',
    'faq.eyebrow': 'Veelgestelde vragen',
    'faq.title': 'Vragen & antwoorden',
    'faq.subtitle': 'Staat je vraag er niet bij? Neem gerust contact met ons op.',
    'faq.q1.question': 'Hoe wordt het deeg gemaakt?',
    'faq.q1.answer': 'Ons deeg rijst minimaal 48 uur op traditionele Napolitaanse wijze — met alleen bloem, water, een klein beetje gist en zout. Daarna wordt elke bodem met de hand uitgerekt, nooit met een deegroller, zodat de luchtige structuur en de karakteristieke rand (cornicione) behouden blijven.',
    'faq.q2.question': 'Wat maakt dat de pizza’s authentiek zijn?',
    'faq.q2.answer': 'We bakken in een houtoven van 485°C, gebruiken San Marzano tomaten en verse mozzarella, en houden ons aan de traditionele Napolitaanse bereidingswijze. Geen shortcuts — precies zoals pizza in Napels wordt gemaakt.',
    'faq.q3.question': 'Hoe kan ik betalen?',
    'faq.q3.answer': 'Je rekent af bij het ophalen van je bestelling. We accepteren zowel pinbetalingen als contant geld, met een voorkeur voor contante betaling.',
    'faq.q4.question': 'Is het ook mogelijk om pizza’s te bezorgen?',
    'faq.q4.answer': 'Nee, op dit moment bieden we uitsluitend afhalen aan. Je bestelling staat klaar op het door jou gekozen tijdstip bij Wilhelmina van Pruisenlaan 8 in Leusden.',
    'faq.q5.question': 'Waarom kan ik een tijdslot niet meer selecteren?',
    'faq.q5.answer': 'Tijdslots die niet meer selecteerbaar zijn (met de melding “vol”) zijn al door een andere klant gereserveerd. Kies een ander beschikbaar moment tussen 17:00 en 19:00.',
    'faq.q6.question': 'Kan ik alvast reserveren?',
    'faq.q6.answer': 'Je kunt altijd reserveren voor de eerstvolgende vrijdag door alvast een bestelling te plaatsen via de website. Wil je verder vooruit plannen dan dat? Neem dan telefonisch contact met ons op.',
    'faq.q7.question': 'Waarom zijn jullie alleen op vrijdag open?',
    'faq.q7.answer': 'We bakken bewust maar één dag per week. Zo houden we het overzichtelijk, garanderen we verse ingrediënten en geven we elke pizza de aandacht die hij verdient.',
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
    'order.form.email': 'E-mailadres',
    'order.form.emailPlaceholder': 'naam@voorbeeld.nl',
    'order.form.invalidEmail': 'Voer een geldig e-mailadres in',
    'order.form.phone': 'Telefoonnummer',
    'order.form.phonePlaceholder': '06 12 34 56 78',
    'order.form.postcode': 'Postcode',
    'order.form.postcodePlaceholder': '1234 AB',
    'order.form.houseNumber': 'Huisnummer',
    'order.form.houseNumberPlaceholder': '12',
    'order.form.payment': 'Betalingswijze',
    'order.form.paymentCash': 'Contant',
    'order.form.paymentCard': 'Pin',
    'order.form.pickup': 'Voorkeur ophaaltijd',
    'order.form.pickupHint': 'Uitsluitend vrijdag tussen 17:00 en 19:00',
    'order.form.notes': 'Opmerkingen (optioneel)',
    'order.form.notesPlaceholder': 'Allergieën, opmerkingen…',
    'order.form.submit': 'Bestelling plaatsen',
    'order.form.submitting': 'Bezig met plaatsen…',
    'order.form.required': 'Verplicht veld',
    'order.form.invalidPhone': 'Voer een geldig telefoonnummer in',
    'order.form.slotTaken': 'Deze tijd is helaas net vergeven. Kies een andere tijd.',
    'order.form.slotFull': 'vol',
    'order.form.submitError': 'Er ging iets mis bij het plaatsen van je bestelling. Probeer het opnieuw of bel ons even.',
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
    'hero.title': 'Authentic Neapolitan pizzas in Leusden. \nHandmade and freshly baked!',
    'hero.subtitle': 'Fridays only. Takeaway only.',
    'hero.cta': 'View the menu',
    'hero.cta2': 'Opening hours',
    'menu.eyebrow': 'Our menu',
    'menu.title': 'Homemade, traditionally risen dough and authentic ingredients.',
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
    'address.line1': 'Wilhelmina van Pruisenlaan 8',
    'address.line2': '3832 CH Leusden',
    'address.directions': 'Get directions',
    'address.phone': 'Phone',
    'reviews.eyebrow': 'What guests say',
    'reviews.title': 'Rated by the neighbourhood',
    'story.eyebrow': 'Our story',
    'story.title': 'The Story',
    'story.intro': 'Our love for Italy didn’t start in a kitchen, but on the road: the smell of wood fire, the calm of a village square, and pizza made the way it has been for generations. We brought that wonder back to Leusden — with the same intent: no shortcuts, no compromises.',
    'story.feature1.stat': '48 hours',
    'story.feature1.title': 'Rise time',
    'story.feature1.desc': 'Our dough rises for at least 48 hours the traditional Neapolitan way. That’s what makes it light, easy to digest, and full of flavour.',
    'story.feature2.stat': '485°C',
    'story.feature2.title': 'Wood-fired oven',
    'story.feature2.desc': 'Baked in an oven of 485°C in under 90 seconds, with a crisp base and a soft, airy rim — the cornicione.',
    'story.feature3.stat': 'By hand',
    'story.feature3.title': 'No rolling pin',
    'story.feature3.desc': 'Every base is stretched by hand, never with a rolling pin, so the dough keeps its lightness.',
    'story.closing': 'To us, pizza isn’t fast food — it’s a craft. A tribute to Naples and to everything that makes Italian cuisine so special: simplicity, patience, and the finest ingredients.',
    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'Questions & answers',
    'faq.subtitle': 'Don’t see your question here? Feel free to get in touch.',
    'faq.q1.question': 'How is the dough made?',
    'faq.q1.answer': 'Our dough rises for at least 48 hours the traditional Neapolitan way — just flour, water, a touch of yeast and salt. Every base is then stretched by hand, never with a rolling pin, so the airy structure and the characteristic rim (cornicione) are preserved.',
    'faq.q2.question': 'What makes the pizzas authentic?',
    'faq.q2.answer': 'We bake in a 485°C wood-fired oven, use San Marzano tomatoes and fresh mozzarella, and follow traditional Neapolitan technique throughout. No shortcuts — exactly how pizza is made in Naples.',
    'faq.q3.question': 'How can I pay?',
    'faq.q3.answer': 'You pay when you pick up your order. We accept both card and cash, though we prefer cash payments.',
    'faq.q4.question': 'Is delivery also possible?',
    'faq.q4.answer': 'No, we currently offer pickup only. Your order will be ready at your chosen time at Wilhelmina van Pruisenlaan 8 in Leusden.',
    'faq.q5.question': 'Why can I no longer select a time slot?',
    'faq.q5.answer': 'Time slots that can no longer be selected (marked “full”) have already been reserved by another customer. Please choose another available time between 17:00 and 19:00.',
    'faq.q6.question': 'Can I reserve in advance?',
    'faq.q6.answer': 'You can always reserve for the upcoming Friday by placing your order in advance through the website. Want to plan further ahead than that? Give us a call.',
    'faq.q7.question': 'Why are you only open on Fridays?',
    'faq.q7.answer': 'We deliberately bake just one day a week. It keeps things manageable, guarantees fresh ingredients, and lets us give every pizza the attention it deserves.',
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
    'order.form.email': 'Email address',
    'order.form.emailPlaceholder': 'name@example.com',
    'order.form.invalidEmail': 'Please enter a valid email address',
    'order.form.phone': 'Phone number',
    'order.form.phonePlaceholder': '06 12 34 56 78',
    'order.form.postcode': 'Postcode',
    'order.form.postcodePlaceholder': '1234 AB',
    'order.form.houseNumber': 'House number',
    'order.form.houseNumberPlaceholder': '12',
    'order.form.payment': 'Payment method',
    'order.form.paymentCash': 'Cash',
    'order.form.paymentCard': 'Card',
    'order.form.pickup': 'Preferred pickup time',
    'order.form.pickupHint': 'Friday between 17:00 and 19:00 only',
    'order.form.notes': 'Notes (optional)',
    'order.form.notesPlaceholder': 'Allergies, remarks…',
    'order.form.submit': 'Place order',
    'order.form.submitting': 'Placing order…',
    'order.form.required': 'Required field',
    'order.form.invalidPhone': 'Please enter a valid phone number',
    'order.form.slotTaken': 'That time was just taken. Please choose another.',
    'order.form.slotFull': 'full',
    'order.form.submitError': 'Something went wrong placing your order. Please try again or give us a call.',
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
  let cart;
  try {
    cart = JSON.parse(localStorage.getItem(STORAGE_CART)) || {};
  } catch {
    cart = {};
  }

  const validIds = new Set(PIZZAS.map((p) => p.id));
  let hasStaleEntries = false;
  for (const id of Object.keys(cart)) {
    if (!validIds.has(id) || !(cart[id] > 0)) {
      delete cart[id];
      hasStaleEntries = true;
    }
  }
  if (hasStaleEntries) setCart(cart);

  return cart;
}

export function setCart(cart) {
  localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
}

export function formatPrice(value) {
  return '€ ' + value.toFixed(2).replace('.', ',');
}
