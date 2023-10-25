import { useEffect, useState } from "react";

export default function useDeviceHeight(): number | undefined {
  const [height, setHeight] = useState<number | undefined>();

  useEffect(() => {
    const listener = () => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      setHeight(vh);
    };
    listener();
    window.addEventListener("resize", listener);
    return () => { window.removeEventListener("resize", listener); }
  }, []);

  return height;
}
