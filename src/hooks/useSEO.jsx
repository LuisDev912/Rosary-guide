import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function setMeta({ name, property, content, noIndex }) {
  let meta;

  if (name) {
    meta = document.querySelector(`meta[name="${name}"]`);
  }

  if(noIndex){
    meta = document.querySelector(`meta[property="${property}"]`)
  }

  if (property) {
    meta = document.querySelector(`meta[property="${property}"]`);
  }

  if (!meta) {
    meta = document.createElement("meta");
    if (name) meta.setAttribute("name", name);
    if (property) meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

export function useSEO({ title, description, og, index }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (title) {
      document.title = t(title);
    }

    if (description) {
      setMeta({
        name: "description",
        content: t(description),
      });
    }

    if (index){
      setMeta({
        name: 'robots',
        content: 'noindex, follow'
      })
    }

    if (og?.title) {
      setMeta({
        property: "og:title",
        content: t(og.title),
      });
    }

    if (og?.description) {
      setMeta({
        property: "og:description",
        content: t(og.description),
      });
    }

    if (og?.locale) {
      setMeta({
        property: "og:locale",
        content: og.locale,
      });
    }
  }, [i18n.language, title, description, og]);
}
