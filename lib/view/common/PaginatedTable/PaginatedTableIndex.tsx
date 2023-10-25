import { useEffect, useMemo } from "react";
import ButtonWithLoading from "../ButtonWithLoading";
import styles from "./PaginatedTableIndex.module.css";

export interface IPaginatedTableIndexProps {
  className?: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  disableNextPageButton?: boolean;
  disablePrevPageButton?: boolean;
  loading?: boolean;
}

export default function PaginatedTableIndex(props: IPaginatedTableIndexProps) {

  const index = useMemo(() => {
    const min = Math.max(0, props.currentPage - 2);
    const idx = [];
    for (let i = min; i < min + 5; i++) {
      idx.push(i)
    }
    return idx;
  }, [props.currentPage]);

  return (
    <section className={styles.root + " " + props.className}>
      <div className={styles.indexContainer}>
        {index.map(x => (
          <ButtonWithLoading
            variant="text"
            color="dark"
            disabled={
              (props.disableNextPageButton && x > props.currentPage)
              || (props.disablePrevPageButton && x < props.currentPage)
            }
            key={x}
            loading={props.loading == true && x === props.currentPage}
            className={props.currentPage === x ? styles.selectedIndex : undefined}
            onClick={() => props.onPageChange(x)}
          >
            {x + 1}
          </ButtonWithLoading>
        ))}
      </div>
    </section>
  );
}

