import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element referenced by the URL hash (e.g. /#blog) whenever
 * the route/hash changes. Needed for links like <Link to="/#blog"> that
 * point from the blog post pages back to a section on the home page.
 */
export default function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a tick so the target page has rendered before we scroll
      const id = hash.replace('#', '');
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [hash, pathname]);
}
