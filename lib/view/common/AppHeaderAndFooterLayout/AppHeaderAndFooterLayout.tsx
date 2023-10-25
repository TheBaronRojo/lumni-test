import { FunctionComponent, ReactNode } from "react";
import styles from "./AppHeaderAndFooterLayout.module.css";

export interface IAppHeaderAndFooterLayoutProps {
  children: ReactNode;
  Header: FunctionComponent<{ className: string }>;
  Footer: FunctionComponent<{ className: string }>;
}

const AppHeaderAndFooterLayout = ({ children, Header, Footer }: IAppHeaderAndFooterLayoutProps) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default AppHeaderAndFooterLayout;
