import { CSSProperties, ReactNode } from 'react';
import styles from './DropDownMenuList.module.css';

export interface IDropDownProps {
  items: ReactNode[];
  style?: CSSProperties;
}


function DropDownMenuList({ items, style }: IDropDownProps): JSX.Element {

  return (
    <div className={styles.root} style={style}>
      {
        items.map(
          (item, index): JSX.Element => {
            return (
              <p key={index} className={styles.listItem}>
                {item}
              </p>
            );
          }
        )
      }
    </div>
  )
}

export default DropDownMenuList

