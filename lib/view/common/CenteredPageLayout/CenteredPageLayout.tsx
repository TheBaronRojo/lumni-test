import { ReactNode } from "react";
import styles from "./CenteredPageLayout.module.css";

export interface ICenteredPageLayoutProps {
  children: ReactNode;
  color?: "paper";
  className?: string;
}

const CenteredPageLayout = ({
  children,
  className,
  color,
}: ICenteredPageLayoutProps) => {
  return (
    <div className={styles.root + (color ? ` ${styles[color]}` : "") + (className ? ` ${className}` : "")}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default CenteredPageLayout;
