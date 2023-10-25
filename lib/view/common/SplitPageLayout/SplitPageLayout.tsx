import { Children, ReactNode } from "react";
import styles from "./SplitPageLayout.module.css";

export interface ISplitPageLayoutProps {
  children: ReactNode;
}

const SplitPageLayout = (props: ISplitPageLayoutProps) => {
  return (
    <div className={styles.root}>
      {Children.map(props.children, child => (
        <div>
          {child}
        </div>
      ))?.slice(0, 2)}
    </div>
  );
}

export default SplitPageLayout;
