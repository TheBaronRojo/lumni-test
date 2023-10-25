import { useEffect, useMemo, useState } from "react";
import Input from "../Input";
import styles from "../Fields.module.css";
import fieldStyles from "./CellphoneField.module.css";

export interface ICellPhoneFieldValue {
  prefix: string;
  number: string;
}

export type ICellPhoneFieldChangeEventHandler = (
  evt: {
    type: "change",
    target: { name?: string, value: ICellPhoneFieldValue }
  }
) => void;

export type ICellPhoneFieldBlurEventHandler = (
  evt: {
    type: "blur",
    target: { name?: string }
  }
) => void;

export interface ICellphoneFieldProps {
  variant: "outlined" | "filled";
  label?: string;
  color?: "light" | "dark";
  id?: string;
  name?: string;
  value?: ICellPhoneFieldValue;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  onChange?: ICellPhoneFieldChangeEventHandler;
  onBlur?: ICellPhoneFieldBlurEventHandler;
}

const CellphoneField = (props: ICellphoneFieldProps) => {

  const isExternalManaged = useMemo(() => props.value !== undefined, [props.value]);
  const [internalValue, setInternalValue] = useState({ prefix: "", number: "" });
  const value = isExternalManaged ? props.value! : internalValue;

  useEffect(() => {
    if (!isExternalManaged && props.onChange) {
      props.onChange({ type: "change", target: { name: props.name, value: internalValue } });
    }
  }, [internalValue]);

  const onChange = isExternalManaged
    ? (evt: any) => {
      if (!props.onChange) return;
      const newValue = evt.target.name === props.name + "_prefix"
        ? { ...props.value!, prefix: evt.target.value }
        : { ...props.value!, number: evt.target.value };
      props.onChange({ type: "change", target: { name: props.name, value: newValue } });
    } : (evt: any) => {
      const dispatch = evt.target.name === props.name + "_prefix"
        ? (pv: ICellPhoneFieldValue) => ({ ...pv, prefix: evt.target.value })
        : (pv: ICellPhoneFieldValue) => ({ ...pv, number: evt.target.value });
      setInternalValue(dispatch);
    };

  const onBlur = props.onBlur
    ? () => props.onBlur!({ type: "blur", target: { name: props.name } })
    : undefined;

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {props.label &&
        <label className={styles.label + (props.error ? ` ${styles.error}` : "")} htmlFor={props.id}>
          {props.label}
        </label>
      }
      <div className={fieldStyles.inputsContainer}>
        <div style={{ position: "relative" }}>
          <Input
            variant={props.variant}
            color={props.color}
            id={props.id}
            type="number"
            disableArrows={true}
            name={props.name + "_prefix"}
            value={value.prefix}
            disabled={props.disabled}
            error={props.error}
            onChange={onChange}
            onBlur={onBlur}
            style={{ width: "100%", padding: "0 1em 0 1.2em" }}
            maxLength={3}
          />
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              left: "0.5em",
              bottom: "0"
            }}
          >
            +
          </div>
        </div>

        <Input
          variant={props.variant}
          color={props.color}
          id={props.id}
          type="number"
          name={props.name + "_number"}
          value={value.number}
          disabled={props.disabled}
          placeholder={props.placeholder}
          error={props.error}
          onChange={onChange}
          onBlur={onBlur}
          disableArrows={true}
        />
      </div>
    </div>
  )
};

export default CellphoneField;
