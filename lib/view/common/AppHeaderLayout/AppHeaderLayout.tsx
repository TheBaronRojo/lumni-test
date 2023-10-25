import { ReactNode } from "react";
import AppHeader from "../AppHeader";
import styles from "./AppHeaderLayout.module.css";

export interface IAppHeaderLayoutProps {
  children: ReactNode;
}

const AppHeaderLayout = (props: IAppHeaderLayoutProps) => {
  return (
    <div className={styles.root}>
      <AppHeader className={styles.header} />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
}

export default AppHeaderLayout;
