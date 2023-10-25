import { ReactNode } from "react";
import styles from "./RowActions.module.css";

export interface IRowActionsProps {
  children: ReactNode;
}

const RowActions = (props: IRowActionsProps) => {
  return (
    <span className={styles.root} onClick={evt => evt.stopPropagation()}>
      {props.children}
    </span>
  )
}

export default RowActions;
