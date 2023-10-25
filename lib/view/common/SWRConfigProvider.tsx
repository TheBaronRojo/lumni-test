import { ReactNode, useEffect, useState } from "react";
import { SWRConfig } from "swr";

const swrCacheStorageKey = "swr:storageCache"
let unloadListenerAssigned = false;

function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem(swrCacheStorageKey) || "[]"))

  if (!unloadListenerAssigned) {
    unloadListenerAssigned = true;
    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()))
      localStorage.setItem(swrCacheStorageKey, appCache)
    });
  }

  return map;
}

export interface ISWRConfigProviderProps {
  children: ReactNode;
}

const SWRConfigProvider = (props: ISWRConfigProviderProps) => {

  const [value, setValue] = useState(undefined as any);

  useEffect(() => { setValue({ provider: localStorageProvider }) }, []);

  return (
    <SWRConfig value={value}>
      {props.children}
    </SWRConfig>
  );
};

export default SWRConfigProvider;
