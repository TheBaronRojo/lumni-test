import IPersonDto from "@application/models/IPersonDto";
import { getPerson } from "@view/common/Api/PersonsApi";
import { ReactNode, useEffect, useState } from "react";
import AppStateContext from "./AppStateContext";
import appStateConfig from "./appStateConfig";
import { useSessionState } from "./useSessionState";

export interface IAppStateProvider {
  children: ReactNode;
}

const AppStateProvider = (props: IAppStateProvider) => {
  const [personState, setPersonState] = useState<IPersonDto | null>(null);
  const [loadingPersonState, setLoadingPersonState] = useState(true);
  const { 
    sessionState, 
    loadingSessionState, 
    storeSessionState, 
    clearStoredSessionState 
  } = useSessionState();

  useEffect(() => { reloadPersonState(); }, [sessionState]);

  const reloadPersonState = async () => {
    if (!sessionState?.personId) return;

    setLoadingPersonState(true);
    const result = await getPerson(sessionState.personId);
    setLoadingPersonState(false);

    if (!result.isSuccess) {
      // TODO: Manage this
      // alert("Lo sentimos, hubo un error al cargar la información personal");
      return
    }

    setPersonState(result.body);
    localStorage.setItem(appStateConfig.personStorageKey, JSON.stringify(result.body));
  };

  useEffect(() => {
    const loadedPersonJson = localStorage.getItem(appStateConfig.personStorageKey);
    if (loadedPersonJson == null) {
      setLoadingPersonState(false);
      return;
    }
    const loadedPerson = JSON.parse(loadedPersonJson) as IPersonDto;
    setPersonState(loadedPerson);
  }, []);

  return (
    <AppStateContext.Provider value={{
      sessionState,
      loadingSessionState,
      personState,
      loadingPersonState,
      reloadPersonState,
      storeSessionState,
      clearStoredSessionState,
    }}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
