import { ChangeEventHandler, FocusEventHandler, ForwardedRef, forwardRef, FunctionComponent } from "react";
import Input from "../Input";
import styles from "../Fields.module.css";

export interface IWordsFieldProps {
  variant: "outlined" | "filled";
  label?: string;
  color?: "light" | "dark";
  multiline?: boolean;
  id?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  maxLength?: number;
  maxWords?: number;
  disableArrows?: boolean;
  Icon?: FunctionComponent<{ className?: string }>;
  onChange?: ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement> & FocusEventHandler<HTMLTextAreaElement>;
  autofocus?: boolean;
}

const WordsField = forwardRef(function WordsField(
  props: IWordsFieldProps,
  ref: ForwardedRef<HTMLTextAreaElement & HTMLInputElement>,
) {

  const { Icon, label, maxWords, onChange, ..._props } = props;

  const _onChange: (ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement>) | undefined = onChange
    ? (evt) => {
      let wordsCount = evt.target.value
        .split(" ")
        .filter(x => x.length > 0)
        .length;

      if (maxWords === undefined || wordsCount <= maxWords) {
        onChange(evt as any);
      }
    }
    : undefined;

  return (
    <div>
      {label &&
        <label className={styles.label + (props.error ? ` ${styles.error}` : "")} htmlFor={props.id}>
          {label}
        </label>
      }
      <div className={styles.inputWithIconContainer}>
        {Icon && <Icon className={styles.icon} />}
        <Input
          ref={ref}
          style={{ width: "100%", boxSizing: "border-box" }}
          onChange={_onChange}
          {..._props}
        />
      </div>
    </div>
  )
});

export default WordsField;
