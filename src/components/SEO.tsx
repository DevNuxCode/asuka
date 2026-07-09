import { useEffect } from 'react';
import { SITE_NAME, SITE_URL } from '../config/site';

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/blog/mi-slug"
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets document title, meta description, canonical URL, Open Graph/Twitter
 * tags and (optionally) JSON-LD structured data for the current route.
 * No external dependency needed (no react-helmet), works fully client-side.
 */
export default function SEO({ title, description, path, image, type = 'website', jsonLd }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/LogoIA.png`;

    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setLinkTag('canonical', canonicalUrl);

    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', SITE_NAME);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // JSON-LD structured data (helps Google understand article pages)
    const scriptId = 'seo-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
