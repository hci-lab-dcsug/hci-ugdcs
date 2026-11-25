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

    // Hide first, then show what is already on screen a frame later, so its
    // entrance actually plays. A timer backs up the frame callback, which a
    // hidden tab may never run, so nothing can stay invisible.
    const fold = window.innerHeight;
    const now = [];
    const later = [];
    items.forEach((el) => (el.getBoundingClientRect().top < fold ? now : later).push(el));

    root.classList.add("motion-ready");

    let shown = false;
    const showNow = () => {
      if (shown) return;
      shown = true;
      now.forEach((el) => el.classList.add("is-in"));
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(showNow));
    const timer = setTimeout(showNow, 120);

    // A photo revealed by clip-path has no visible area until it is shown, so
    // the observer would never see it: watch its parent instead.
    const watched = new Map();
    later.forEach((el) => {
      const target = el.dataset.reveal === "scale" && el.parentElement ? el.parentElement : el;
      if (!watched.has(target)) watched.set(target, []);
      watched.get(target).push(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (watched.get(entry.target) || []).forEach((el) => el.classList.add("is-in"));
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    watched.forEach((_, target) => io.observe(target));
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      showNow();
      io.disconnect();
    };
  }, [pathname]);
}
