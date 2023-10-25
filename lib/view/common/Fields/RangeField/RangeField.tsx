import { useEffect, useState } from "react";
import Input from "../Input";
import styles from "../Fields.module.css";
import fieldStyles from "./RangeField.module.css";

export interface IRangeFieldValue {
  min: string;
  max: string;
}

export type IRangeFieldChangeEventHandler = (
  evt: {
    type: "change",
    target: { name?: string, value: IRangeFieldValue }
  }
) => void;

export type IRangeFieldBlurEventHandler = (
  evt: {
    type: "blur",
    target: { name?: string, value: IRangeFieldValue }
  }
) => void;

export interface IRangeFieldProps {
  variant: "outlined" | "filled";
  label?: string;
  color?: "light" | "dark";
  id?: string;
  type?: "text";
  name?: string;
  value?: IRangeFieldValue;
  disabled?: boolean;
  placeholder?: IRangeFieldValue;
  error?: boolean;
  onChange?: IRangeFieldChangeEventHandler;
  onBlur?: IRangeFieldBlurEventHandler;
}

const RangeField = (props: IRangeFieldProps) => {

  const [value, setValue] = useState(props.value ?? { min: "", max: "" });

  useEffect(() => {
    setValue(props.value ?? {min: "", max: ""}); 
  }, [props.value?.min, props.value?.max]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange({ type: "change", target: { name: props.name, value } });
    }
  }, [value])

  const onChange = (evt: any) => {
    if (evt.target.name === props.name + "_min") {
      setValue({ ...value, min: evt.target.value });
    }
    else if (evt.target.name === props.name + "_max") {
      setValue({ ...value, max: evt.target.value });
    }
  }

  const onBlur = (evt: any) => {
    if (props.onBlur) {
      props.onBlur({ type: "blur", target: { name: props.name, value } });
    }
  }

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {props.label &&
        <label className={styles.label+ (props.error ? ` ${styles.error}` : "")} htmlFor={props.id}>
          {props.label}
        </label>
      }
      <div className={fieldStyles.inputsContainer}>

        <Input
          variant={props.variant}
          color={props.color}
          id={props.id}
          type="number"
          name={props.name + "_min"}
          value={value.min}
          disabled={props.disabled}
          placeholder={props.placeholder?.min}
          error={props.error}
          onChange={onChange}
          onBlur={onBlur}
          style={{ width: "100%" }}
          maxLength={3}
        />

        <Input
          variant={props.variant}
          color={props.color}
          id={props.id}
          type="number"
          name={props.name + "_max"}
          value={value.max}
          disabled={props.disabled}
          placeholder={props.placeholder?.max}
          error={props.error}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
};

export default RangeField;
