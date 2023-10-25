import { ReactNode } from "react";
import styles from "./InfoSection.module.css";

export interface IInfoSectionProps {
  label: string;
  children: ReactNode;
}

const InfoSection = (props: IInfoSectionProps) => {
  return (
    <div className={styles.root}>
      <label>{props.label}</label>
      <span className={styles.itemsContainer}>
        {props.children}
      </span>
    </div>
  );
};

export default InfoSection;
