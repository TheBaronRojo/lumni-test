import { ReactNode } from "react";
import styles from "./JobOffersPreviewsGridLayout.module.css";

export interface IJobOffersPreviewsGridLayoutProps {
  children: ReactNode;
  className?: string;
}

const JobOffersPreviewsGridLayout = (
  props: IJobOffersPreviewsGridLayoutProps
) => {
  return (
    <div className={styles.root + (props.className ? ` ${props.className}` : "")}>
      {props.children}
    </div>
  );
}

export default JobOffersPreviewsGridLayout;
