import { useEffect, useState } from "react";

export default function useIsMobile(defaultValue: boolean): boolean {
  const [isMobile, setIsMobile] = useState(defaultValue);

  useEffect(() => {
    const listener = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > 1000) setIsMobile(false);
      else setIsMobile(true);
    };
    listener();
    window.addEventListener("resize", listener);

    return () => { window.removeEventListener("resize", listener); }

  }, []);

  return isMobile;
}
