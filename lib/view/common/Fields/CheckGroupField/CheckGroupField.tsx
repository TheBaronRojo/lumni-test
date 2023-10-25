import { useMemo } from "react";
import styles from "../Fields.module.css";
import fieldStyles from "./CheckGroupField.module.css";
import CheckBox from "../CheckBox";

export type ICheckGroupFieldValue = string[];

export type ICheckGroupFieldChangeEventHandler = (
  evt: {
    type: "change",
    target: { name?: string, value: ICheckGroupFieldValue }
  }
) => void;

export type ICheckGroupFieldBlurEventHandler = (
  evt: {
    type: "blur",
    target: { name?: string }
  }
) => void;

export interface ICheckGroupFieldProps {
  options: { value: string, text: string }[];
  label?: string;
  color?: "light" | "dark" | "primary" | "secondary";
  name?: string;
  value?: ICheckGroupFieldValue;
  disabled?: boolean;
  error?: boolean;
  onChange?: ICheckGroupFieldChangeEventHandler;
  onBlur?: ICheckGroupFieldBlurEventHandler;
}

const CheckGroupField = (props: ICheckGroupFieldProps) => {

  const value = props.value ?? [];
  const baseId = useMemo(() => `check-group-${props.name}-id`, []);

  const onChange = (evt: any) => {  
    let newValue = evt.target.checked
      ? [...value.filter(x => x != evt.target.value), evt.target.value]
      : [...value.filter(x => x != evt.target.value)];
    
    if (props.onChange) {
      props.onChange({ type: "change", target: { name: props.name, value: newValue } });
    }
  };

  const onBlur = (evt: any) => {
    if (props.onBlur) {
      props.onBlur({ type: "blur", target: { name: props.name } });
    }
  };

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {props.label &&
        <label className={styles.label + (props.error ? ` ${styles.error}` : "")} >
          {props.label}
        </label>
      }
      <div className={fieldStyles.optionsContainer}>
        {props.options.map((x, i) => (
          <div
            key={x.value}
            style={{
              background: value.includes(x.value)
                ? "rgba(var(--color-primary-rgb), 0.1)"
                : undefined,
            }}>
            <div style={{ minWidth: "1.5rem" }}>
              <CheckBox
                disabled={props.disabled}
                value={x.value}
                onChange={onChange}
                checked={value.includes(x.value)}
                error={props.error}
                id={`${baseId}-${i}`}
                onBlur={onBlur}
              />
            </div>
            <label
              htmlFor={`${baseId}-${i}`}
              className={props.error ? styles.error : ""}
            >
              {x.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CheckGroupField;
