"use client";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
export default function Home() {
  const { t } = useTranslation();
  const changelng = () => {
    let currentLang = i18n.language;
    console.log(currentLang);

    const newLang = currentLang === "en" ? "ur" : "en";
    i18n.changeLanguage(newLang);
    

    console.log(newLang);
  };

  return (
    <>
      <div>
        <h1>{t("name")}</h1>
        <h1>{t("email")}</h1>
        <h1>{t("number")}</h1>
        <button
          className="bg-slate-950 text-center text-slate-100"
          onClick={changelng}
        >
          Change Language
        </button>
      </div>
    </>
  );
}
