import { CSSProperties, ReactNode } from "react";
import styles from './ContentListLocations.module.css';


export interface IContentListLocations {
  items: ReactNode;
  style?: CSSProperties;
}

export default function ContentListLocations({ items, style }: IContentListLocations): JSX.Element {
  return (
    <div className={styles.root} style={style}>
      <p className={styles.listItem}>{items}</p>
    </div>
  );
}