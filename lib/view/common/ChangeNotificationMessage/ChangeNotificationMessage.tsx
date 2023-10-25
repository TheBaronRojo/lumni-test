import styles from "./ChangeNotificationMessage.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";

interface IChangeNotificationMessage {
  message: string;
  isShowed: boolean;
  closeConfirmationMessage: () => void;
}

function ChangeNotificationMessage(props: IChangeNotificationMessage) {
  const scrollToRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (props.isShowed) {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

  }, [props.isShowed]);

  return (
    <div ref={scrollToRef} className={`${styles.containerMessage} ${props.isShowed && styles.isOpen}`}>
      <p>{props.message}</p>
      <button onClick={props.closeConfirmationMessage}><AiOutlineCloseCircle className={styles.closeIcon} /></button>
    </div>
  );
}

export default ChangeNotificationMessage;