import { ReactNode, useMemo } from "react";
import styles from "./AnimatedPanel.module.css";
import xIcon from "public/images/CommonIcons/x-Icon.svg";

export interface IAnimatedPanelProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
  doubleExpand?: boolean;
}

const AnimatedPanel = (props: IAnimatedPanelProps) => {

  const _className = useMemo(() => (
    [
      styles.root,
      props.open ? styles.open : undefined,
      props.doubleExpand ? styles.doubleExpand : undefined,
      styles[props.side ?? 'left'],
    ].filter(x => x !== undefined).join(" ")
  ), [props.open, props.side, props.doubleExpand]);

  return (
    <article className={_className}>
      <header>
        <img
          className={styles.closeButton}
          src={xIcon.src}
          alt=""
          onClick={props.onClose}
        />
      </header>
      <main onWheel={evt => { evt.preventDefault(); evt.stopPropagation(); }}>
        {props.children}
      </main>
    </article>
  );
};

export default AnimatedPanel;
