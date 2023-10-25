import { Children, ReactNode } from "react";
import styles from "./ItemsInfoSection.module.css";

export interface IItemsInfoSectionProps {
  label: string;
  children: ReactNode;
}

const ItemsInfoSection = (props: IItemsInfoSectionProps) => {
  return (
    <div className={styles.root}>
      <label>{props.label}</label>
      <ul className={styles.itemsContainer}>
        {Children.map(props.children, x => <li>{x}</li>)}
      </ul>
    </div>
  );
};

export default ItemsInfoSection;
