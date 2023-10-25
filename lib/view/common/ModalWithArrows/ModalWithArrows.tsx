import { ReactNode } from "react";
import styles from "./ModalWithArrows.module.css";
import { MdClose } from "react-icons/md";
import useDisableBodyScroll from "../HelpersHooks/useDisableBodyScroll";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import JobOfferDetailCard from "@view/students/JobOfferDetailCard";

export interface IModalWithArrowsProps {
  open: boolean;
  children: ReactNode;
  disableCloseWhenClickOutside?: boolean;
  hideLeftArrow?: boolean;
  hideRightArrow?: boolean;
  onClose?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const ModalWithArrows = (props: IModalWithArrowsProps) => {

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
      className={styles.modalWithArrows + (props.open ? ` ${styles.openModalWithArrows}` : "")}
      onClick={onContentClick}
    >
      <div className={styles.containerModalWithArrow}>
        <div className={styles.containerArrowLeft + (props.hideLeftArrow ? ` ${styles.hidenArrow}` : "")} onClick={props.onPrevious}>
          <MdKeyboardArrowLeft className={styles.arrowLeft} />
        </div>

        <div className={styles.modalWithArrowsContent}>
          {props.onClose && (
            <MdClose onClick={props.onClose} className={styles.closeButton} />
          )}
          {props.children}
        </div>

        <div className={styles.containerArrowRight + (props.hideRightArrow ? ` ${styles.hidenArrow}` : "")} onClick={props.onNext}>
          <MdKeyboardArrowRight className={styles.arrowRight} />
        </div>
      </div>
    </div>
  );
}

export default ModalWithArrows;
