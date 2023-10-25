import { ReactNode } from "react";
import AppStateProvider from "@view/common/AppState/AppStateProvider";
import styles from "./App.module.css";

export interface IAppProps {
  children: ReactNode;
}

const App = ({
  children
}: IAppProps) => {
  return (
    <AppStateProvider>
      <div className={styles.root}>
        {children}
      </div>
    </AppStateProvider>
  );
};

export default App;

