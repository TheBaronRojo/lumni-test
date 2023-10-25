import { ChangeEventHandler, CSSProperties, FocusEventHandler, useEffect } from "react";
import styles from "../Inputs.module.css";

export interface IRadioProps {
  color?: "light" | "dark";
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement> & FocusEventHandler<HTMLTextAreaElement>;
}

const Radio = (props: IRadioProps) => {  

  return (
    <input
      id={props.id}
      type="radio"
      name={props.name}
      value={props.value}
      className={(props.error ? ` ${styles.error}` : "")}
      checked={props.checked}
      disabled={props.disabled}
      onChange={props.onChange}
      onBlur={props.onBlur}
      style={props.style}
    />
  );
}

export default Radio;
