import CloseIcon from "@view/common/SvgIcons/CloseIcon";
import { ReactNode } from "react";
import styles from "./SelectedValue.module.css";

export interface ISelectedValueProps {
  children: ReactNode;
  onDelete?: () => void;
  onClick?: () => void;
}

const SelectedValue = (props: ISelectedValueProps) => {

  const _onDelete_ = (evt: any) => {
    evt.stopPropagation();
    if(props.onDelete) props.onDelete();
  }

  return (
    <span className={styles.root} onClick={props.onClick}>
      {props.children}
      {props.onDelete && <CloseIcon className={styles.icon} onClick={_onDelete_}/>}
    </span>
  );
}

export default SelectedValue;
