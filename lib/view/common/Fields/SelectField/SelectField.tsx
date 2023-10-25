import { FocusEventHandler, useEffect, useState } from "react";
import styles from "../Fields.module.css";
import Select from "../Select";

export interface ISelectFieldProps {
  options: { value: string, text: string }[];
  variant: "outlined" | "filled";
  label?: string;
  color?: "light" | "dark";
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  onChange?: (event: { type: string, target: { value: string, name?: string } }) => void;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
}

const SelectField = (props: ISelectFieldProps) => {


  const [pendingValue, setPendingValue] = useState(null as null | string);

  const handleOptionsChange = () => {
    if (pendingValue) {
      if (props.options.length > 0)
        setPendingValue(null);
      if (
        pendingValue != null
        && props.value != pendingValue
        && props.options.find(x => x.value == pendingValue)
        && props.onChange
      ) {
        props.onChange({ type: "change", target: { value: pendingValue, name: props.name } })
      }
    }
    else if (props.value && !props.options.find(x => x.value == props.value)) {
      setPendingValue(props.value);
      if (props.onChange)
        props.onChange({ type: "change", target: { value: "", name: props.name } })
    }
  };

  useEffect(handleOptionsChange, [props.options]);

  return (
    <div>
      {props.label &&
        <label className={styles.label + (props.error ? ` ${styles.error}` : "")} htmlFor={props.id}>
          {props.label}
        </label>
      }
      <Select
        variant={props.variant}
        color={props.color}
        id={props.id}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        error={props.error}
        onChange={props.onChange}
        onBlur={props.onBlur}
        style={{ width: "100%", boxSizing: "border-box" }}
      >
        <option value=""></option>
        {props.options.map(x => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </Select>

    </div>
  )
};

export default SelectField;
