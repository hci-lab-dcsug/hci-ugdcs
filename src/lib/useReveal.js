import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  Reveals every [data-reveal] element once, as it enters the viewport.
  Content is only hidden after this script has run (the "motion-ready"
  class), so nothing stays invisible if it fails.
*/
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll("[data-reveal]:not(.is-in)"));
    const reduce = !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduce) {
      items.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    // Anything already on the first screen is shown at once (its entrance
    // transition still plays); only content below the fold waits for scroll.
    const fold = window.innerHeight;
    const later = [];
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-in");
      else later.push(el);
    });

    root.classList.add("motion-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    later.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
