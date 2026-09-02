import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.crestaraadvisorygroup.com";
const DEFAULT_IMAGE = "https://www.crestaraadvisorygroup.com/og-image.png";

/**
 * Dynamic SEO component to manage page meta tags, OpenGraph, Twitter Cards,
 * canonical links, and Schema.org JSON-LD structured data for Crestara Advisory Group.
 */
const SEO = ({
  title = "Crestara Advisory Group | Data Protection, Cybersecurity & Financial Advisory",
  description = "Crestara Advisory Group delivers premier multidisciplinary corporate advisory across Data Protection (POTRAZ compliant), Cybersecurity & Digital Forensics, and Financial Modelling & Business Intelligence in Southern Africa and globally.",
  keywords = "Crestara Advisory Group, Data Protection Officer Zimbabwe, Outsourced DPO Harare, Cybersecurity Zimbabwe, Ethical Hacking Africa, Digital Forensics Harare, Financial Modelling FMVA Zimbabwe, Business Intelligence BIDA, POTRAZ compliance, multidisciplinary advisory team",
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema = null
}) => {
  const location = useLocation();
  const currentUrl = canonical ? canonical : `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    // Update Page Title
    document.title = title;

    // Helper to set or update a meta tag by name or property
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard SEO Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // OpenGraph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Crestara Advisory Group");
    setMetaTag("property", "og:locale", "en_GB");

    // Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // JSON-LD Structured Data
    let schemaScript = document.getElementById("page-structured-data");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "page-structured-data";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.text = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, keywords, currentUrl, ogType, ogImage, schema]);

  return null;
};

export default SEO;
