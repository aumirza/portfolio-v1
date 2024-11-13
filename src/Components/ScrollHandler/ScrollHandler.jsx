import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollHandler = ({ children }) => {
  const { pathname, hash } = useLocation();

  const handleScroll = useCallback(() => {
    const element = document.getElementById(hash.replace("#", ""));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [hash]);

  useEffect(() => {
    handleScroll();
  }, [pathname, hash, handleScroll]);

  return children;
};
