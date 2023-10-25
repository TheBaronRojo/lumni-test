import { ReactNode, Children, CSSProperties, useRef, useEffect, useMemo, useState } from "react";
import styles from "./Slider.module.css";

export interface ISliderProps {
  style?: CSSProperties;
  className?: string;
  position: number;
  children: ReactNode;
}

const Slider = (props: ISliderProps) => {

  const widthSensorRef = useRef<HTMLDivElement>(null);
  const heightSensorRef = useRef<HTMLDivElement>(null);
  const [contentPosition, setContentPosition] = useState<"relative" | "absolute">("relative");
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const leftOffset = useMemo(() => width ? `-${width * props.position}px` : "0", [width, props.position]);

  // Reevaluate slider width when windows resize
  useEffect(() => {
    const listener = () => {
      if (widthSensorRef.current && heightSensorRef.current) {
        setHeight(heightSensorRef.current.clientHeight);
        setWidth(widthSensorRef.current.clientWidth);
        // Set position absolute for browser can revaluate natural width
        setContentPosition("absolute");
      }
    };
    listener();
    window.addEventListener("resize", listener);
    return () => { window.removeEventListener("resize", listener); }
  }, []);


  // Unset fixed size and set position relative 
  useEffect(() => {
    if (contentPosition == "absolute") {
      const timer = setTimeout(() => {
        setHeight(null);
        setContentPosition("relative");
      }, 100);
      return () => { clearTimeout(timer); };
    }
  }, [contentPosition]);

  return (
    <div
      className={styles.root + (props.className ? ` ${props.className}` : "")}
    // style={{ height: height ? height : "fit-content" }}
    >
      <div ref={widthSensorRef} className={styles.sensor}></div>
      <div 
        style={{ 
          height: height ? height : "fit-content",
          width: width ? "auto": 0,
        }}
      >
        <div
          className={styles.content}
          ref={heightSensorRef}
          style={{
            left: leftOffset,
            width: width ? width : 'fit-content',
            position: contentPosition,
          }}
        >
          {Children.map(props.children, (child, i) => (
            <div
              className={styles.slide}
              style={{
                width: `${width}px`,
                maxWidth: `${width}px`,
                minWidth: `${width}px`,
                visibility: i === props.position ? "visible" : "hidden",
              }} >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
