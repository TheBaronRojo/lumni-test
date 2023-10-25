import { useState } from "react";
import styles from "./JobOffersSearcher.module.css";
import fieldsStyles from "@view/common/Fields/Fields.module.css"
import ButtonWithLoading from "@view/common/ButtonWithLoading";
import { useEffect } from "react";
import { useRef } from "react";
import WordsField from "@view/common/Fields/WordsField";

export interface IJobOffersSearcherProps {
  onSubmit: (searchString: string) => void;
  resultsCount?: number;
  loading?: boolean;
}

const JobOffersSearcher = (props: IJobOffersSearcherProps) => {

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (props.onSubmit) {
      props.onSubmit(value);
    }
  };

  useEffect(() => {
    if (!props.loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.loading]);

  return (
    <div className={styles.root}>
      <label className={fieldsStyles.label} style={{ color: "var(--color-full-dark)" }}>
        Buscar oferta laboral
        {props.resultsCount != undefined &&
          <span> (Resultados: {props.resultsCount}) </span>
        }
      </label>
      <form className={styles.inputContainer} onSubmit={onSubmit}>
        <WordsField
          ref={inputRef}
          autofocus
          variant="filled"
          value={value}
          onChange={evt => setValue(evt.target.value)}
          disabled={props.loading}
          maxWords={5}
          maxLength={100}
          placeholder={props.loading
            ? "Buscando..."
            : "Ej: Diseñador Bogotá Remoto"
          }
        />
        <ButtonWithLoading
          variant="contained"
          color="light"
          type="submit"
          loading={props.loading === true}
        >
          Buscar
        </ButtonWithLoading>
      </form>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
};

export default JobOffersSearcher;
