import { FunctionComponent, ReactNode } from "react";
import styles from "./LeftPanelLayout.module.css";

export interface ILeftPanelLayoutProps {
  Panel: FunctionComponent;
  panelProps?: any;
  children: ReactNode;
}

export default function LeftPanelLayout({
  Panel,
  panelProps,
  children
}: ILeftPanelLayoutProps) {

  return (
    <div className={styles.root}>
      <aside className={styles.sideBarContainer}>
        <Panel {...panelProps} />
      </aside>
      <main className={styles.mainContainer}>
        {children}
      </main>
    </div>
  );
}

