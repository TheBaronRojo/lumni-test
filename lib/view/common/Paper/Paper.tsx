import { ReactNode } from "react";
import styles from "./Paper.module.css";

export interface IPaperProps {
  children: ReactNode;
  className?: string;
}

const Paper = (props: IPaperProps) => {
  return (
    <section className={styles.root + (props.className ? ` ${props.className}` : "")}>
      {props.children}
    </section>
  );
};

export default Paper;
