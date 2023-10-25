import { useContext } from "react";
import AppStateContext, { IAppState } from "./AppStateContext";

export default function useAppState(): IAppState {
  const state = useContext(AppStateContext);
  if(state === null) throw new Error("AppStateProvider not found");
  return state;
}
