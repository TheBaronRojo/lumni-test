import styles from "./NotificationModal.module.css";
import Button from "@view/common/Button";
import successIcon from "public/images/NotificationModal/success.svg";
import errorIcon from "public/images/NotificationModal/error.svg";
import warningIcon from "public/images/NotificationModal/warning.svg";
import { useMemo } from "react";

export interface INotificationModalProps {
  variant?: "success" | "error" | "warning";
  title?: string;
  description?: string;
  actionLabel?: string;
  open: boolean;
  className?: string;
  onClose?: () => void;
  onAction?: () => void;
}


const NotificationModal = (props: INotificationModalProps) => {

  const icon = useMemo(() => {
    switch (props.variant) {
      case "success":
        return successIcon;
      case "error":
        return errorIcon;
      default:
        return warningIcon;
    }
  }, [props.variant]);

  return (
    <article className={`${styles.modal} ${props.open && styles.isOpen} ${props.className}`}>
      <div className={styles.modalContainer}>
        {props.onClose && (
          <button className={styles.modalClose} onClick={props.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={styles.closeIcon}
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        )}
        {props.variant && <img src={icon.src} alt="icono" />}
        {props.title && <h3>{props.title}</h3>}
        {props.description && <p>{props.description}</p>}
        {props.actionLabel && (
          <Button variant="contained" color="primary" onClick={props.onAction ?? props.onClose}>
            {props.actionLabel}
          </Button>
        )}
      </div>
    </article>
  );
};

export default NotificationModal;
