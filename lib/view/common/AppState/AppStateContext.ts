import IPersonDto from "@application/models/IPersonDto";
import { createContext } from "react";
import IAppSessionState from "./IAppSessionState";

export interface IAppState {
  sessionState: IAppSessionState | undefined;
  loadingSessionState: boolean;
  storeSessionState: (state: IAppSessionState) => void;
  clearStoredSessionState: () => void;
  personState: IPersonDto | null;
  loadingPersonState: boolean;
  reloadPersonState: () => Promise<void>;
}

const AppStateContext = createContext<IAppState>(null as any);

export default AppStateContext;
