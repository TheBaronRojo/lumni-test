import { CSSProperties } from "react";
import styles from "./AppHeader.module.css";
import LogoSection from "./AppHeaderLogoSection";

export interface IAppHeaderProps {
  className?: string;
  style?: CSSProperties
}

export default function AppHeader(props: IAppHeaderProps) {

  return (
    <header
      style={props.style}
      className={styles.root + (props.className ? ` ${props.className}` : "")}
    >
      <LogoSection />
    </header>
  );
}

