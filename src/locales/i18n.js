import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationTR from './tr/translation.json';
import translationEN from './en/translation.json';

const resources = {
	en: {
		translation: translationEN
	},
	tr: {
		translation: translationTR
	}
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'tr',
		debug: true,

		detection: {
			order: ['localStorage', 'cookie', 'navigator'],
			caches: ['localStorage', 'cookie']
		},

		keySeparator: false,

		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
