import { useEffect } from "react";

let disabledCallsCount = 0;

export default function useDisableBodyScroll(disabled: boolean) {
  useEffect(() => {
    const collection = document.getElementsByTagName("body");
    if (collection.length === 0) return;
    const body = collection.item(0)!;
    if (disabled && body.scrollHeight > document.documentElement.clientHeight) {
      body.classList.add("noScroll");
      disabledCallsCount = Math.min(1, disabledCallsCount + 1);
      return () => { 
        disabledCallsCount = Math.max(0, disabledCallsCount - 1);
        if(disabledCallsCount === 0) body.classList.remove("noScroll") 
      };
    } else {
      disabledCallsCount = Math.max(0, disabledCallsCount - 1);
      if(disabledCallsCount === 0) body.classList.remove("noScroll");
    }
  }, [disabled]);
}
