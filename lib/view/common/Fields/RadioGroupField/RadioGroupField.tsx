import { useEffect, useMemo, useState } from "react";
import styles from "../Fields.module.css";
import fieldStyles from "./RadioGroupField.module.css";
import Radio from "../Radio";

export type IRadioGroupFieldValue = string;

export type IRadioGroupFieldChangeEventHandler = (
  evt: {
    type: "change",
    target: { name?: string, value: IRadioGroupFieldValue }
  }
) => void;

export type IRadioGroupFieldBlurEventHandler = (
  evt: {
    type: "blur",
    target: { name?: string, value: IRadioGroupFieldValue }
  }
) => void;

export interface IRadioGroupFieldProps {
  options: { value: string, text: string }[];
  label?: string;
  color?: "light" | "dark" | "primary" | "secondary";
  name?: string;
  value?: IRadioGroupFieldValue;
  disabled?: boolean;
  error?: boolean;
  onChange?: IRadioGroupFieldChangeEventHandler;
  onBlur?: IRadioGroupFieldBlurEventHandler;
}

const RadioGroupField = (props: IRadioGroupFieldProps) => {

  const [value, setValue] = useState<IRadioGroupFieldValue>(props.value ?? "");
  const baseId = useMemo(() => `radio-group-${props.name}-id`, []);

  useEffect(() => {
    setValue(props.value ?? "");
  }, [props.value ?? ""]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange({ type: "change", target: { name: props.name, value } });
    }
  }, [value]);

  const onChange = (evt: any) => {
    if (evt.target.checked) {
      setValue(evt.target.value);
    }
  };

  const onBlur = (evt: any) => {
    if (props.onBlur) {
      props.onBlur({ type: "blur", target: { name: props.name, value } });
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
              backgroundColor: value.includes(x.value)
                ? "rgba(var(--color-primary-rgb), 0.1)"
                : undefined
            }}>
            <div style={{ minWidth: "1.5rem" }}>
              <Radio
                disabled={props.disabled}
                value={x.value}
                onChange={onChange}
                checked={value == x.value}
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

export default RadioGroupField;
