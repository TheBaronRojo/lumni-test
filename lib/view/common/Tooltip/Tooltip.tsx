import { FunctionComponent, ReactNode } from "react";
import styles from "./Tooltip.module.css";

export interface ITooltipProps {
  text: string;
  Component?: string | FunctionComponent<{ className: string; }>;
  children: ReactNode;
  className?: string;
  position?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight';
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
}

const Tooltip = (props: ITooltipProps) => {
  let { Component, children, text, position, left, right, top, bottom } = props;
  const IComponent = Component ?? "span" as any;
  position = position ?? 'topLeft';

  return (
    <IComponent className={styles.root + (props.className ? ` ${props.className}` : "")}>
      {children}
      <div className={styles.tipContainer + " " + styles[position]}>
        <span className={styles.tip} style={{ left, right, top, bottom }} >{text}</span>
      </div>
    </IComponent>
  );
};

export default Tooltip;
