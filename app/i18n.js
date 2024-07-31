"use client";
import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng_lang from "../Locales/eng/eng_lang.json";
import urdu_lang from "../Locales/urdu/urdu_lang.json"; // Adjust path as needed

const resources = {
  en: {
    translation: eng_lang,
  },
  ur: {
    translation: urdu_lang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
