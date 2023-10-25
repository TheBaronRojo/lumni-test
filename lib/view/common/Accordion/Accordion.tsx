import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

export interface IAccordionProps {
  children: ReactNode;
  open: boolean;
}


const Accordion = (props: IAccordionProps) => {

  const contentRef = useRef(null as HTMLDivElement | null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (props.open) {
      setMaxHeight(contentRef.current!.clientHeight + "px");
    } else {
      setMaxHeight("0px");
    }
  }, [props.open]);

  return (
    <div className={styles.root} style={{ maxHeight }}>
      <div ref={contentRef} >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
