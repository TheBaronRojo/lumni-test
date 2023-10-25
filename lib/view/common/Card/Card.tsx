import { ReactNode } from "react";
import styles from "./Card.module.css";

export interface ICardProps {
  children: ReactNode;
  className?: string;
}

const Card = (props: ICardProps) => {
  return (
    <section className={styles.root + (props.className ? ` ${props.className}` : "")}>
      {props.children}
    </section>
  );
}

export default Card;
