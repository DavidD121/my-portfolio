import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Bouncing arrow pinned to the bottom of the viewport on the projects page while there is more page below.
const ScrollHint = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (dismissed || pathname !== "/projects") return;

    const update = () => {
      const { scrollHeight } = document.documentElement;
      const remaining = scrollHeight - (window.scrollY + window.innerHeight);
      if (remaining > 40) {
        setVisible(true);
      } else {
        // Reached the bottom: the user has got the idea, stop showing the hint.
        setVisible(false);
        // Only count it if the user actually scrolled, not a short page or one still rendering.
        if (window.scrollY > 0) setDismissed(true);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Page height changes as routes render and accordions open/close.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [pathname, dismissed]);

  if (dismissed || pathname !== "/projects") return null;

  return (
    <div className={`scrollHint${visible ? " visible" : ""}`} aria-hidden="true">
      <KeyboardArrowDownIcon fontSize="large" />
    </div>
  );
};

export default ScrollHint;
