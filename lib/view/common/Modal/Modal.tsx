import { ReactNode, useState } from "react";
import styles from "./Modal.module.css";
import { MdClose } from "react-icons/md";
import useDisableBodyScroll from "../HelpersHooks/useDisableBodyScroll";
import JobOfferDetailCard from "@view/students/JobOfferDetailCard";

export interface IModalProps {
  open: boolean;
  children: ReactNode;
  disableCloseWhenClickOutside?: boolean;
  onClose?: () => void;
}

const Modal = (props: IModalProps) => {

  useDisableBodyScroll(props.open);

  const onContentClick = (evt: any) => {
    evt.stopPropagation();
  };

  const onContainerClick = () => {
    if (props.onClose && !props.disableCloseWhenClickOutside) {
      props.onClose();
    }
  };

  return (
    <div
      className={styles.modal + (props.open ? ` ${styles.open}` : "")}
      onClick={onContainerClick}
    >

      <div className={styles.modalContent}>
        {props.onClose && (
          <MdClose onClick={props.onClose} className={styles.closeButton} />
        )}
        {props.children}
      </div>

    </div>
  );
}

export default Modal;
