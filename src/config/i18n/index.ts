import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from "@/config/i18n/locales/en/common.json";
import enAuth from "@/config/i18n/locales/en/auth.json";
import enForms from "@/config/i18n/locales/en/forms.json";
import enWorkflow from "@/config/i18n/locales/en/workflow.json";
import enDashboard from "@/config/i18n/locales/en/dashboard.json";
import enSetting from "@/config/i18n/locales/en/settings.json";
import enSubmissions from "@/config/i18n/locales/en/submissions.json";

import deCommon from "@/config/i18n/locales/de/common.json";
import deAuth from "@/config/i18n/locales/de/auth.json";
import deForms from "@/config/i18n/locales/de/forms.json";
import deWorkflow from "@/config/i18n/locales/de/workflow.json";
import deDashboard from "@/config/i18n/locales/de/dashboard.json";
import deSetting from "@/config/i18n/locales/de/settings.json";
import deSubmissions from "@/config/i18n/locales/de/submissions.json";

const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    forms: enForms,
    workflow: enWorkflow,
    dashbord: enDashboard,
    setting: enSetting,
    submissions: enSubmissions,
  },

  de: {
    common: deCommon,
    auth: deAuth,
    forms: deForms,
    workflow: deWorkflow,
    dashbord: deDashboard,
    setting: deSetting,
    submissions: deSubmissions,
  },
};

const savedLang = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns:["common", "auth", "forms", "workflow", "dashboard", "setting", "submissions"],
    defaultNS: "common",
    lng: savedLang, // ✅ ensures correct language before render
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
