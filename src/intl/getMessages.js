import * as fiMessages from './fi.json';

const translations = {
  fi: fiMessages,
}

export function getMessages(locale) {
  return translations[locale] || {};
}
