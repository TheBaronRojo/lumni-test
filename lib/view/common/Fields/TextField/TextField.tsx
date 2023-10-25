import { ChangeEventHandler, FocusEventHandler, ForwardedRef, forwardRef, FunctionComponent } from "react";
import Input from "../Input";
import styles from "../Fields.module.css";

export interface ITextFieldProps {
  variant: "outlined" | "filled";
  label?: string;
  color?: "light" | "dark";
  multiline?: boolean;
  id?: string;
  type?: "text" | "number" | "password" | "date";
  name?: string;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  disableArrows?: boolean;
  Icon?: FunctionComponent<{ className?: string }>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  autofocus?: boolean;
}

const TextField = forwardRef(function TextField(
  props: ITextFieldProps,
  ref: ForwardedRef<HTMLTextAreaElement & HTMLInputElement>,
) {

  const Icon = props.Icon;

  return (
    <div>
      {props.label &&
        <label className={styles.label + (props.error ? ` ${styles.error}` : "")} htmlFor={props.id}>
          {props.label}
        </label>
      }
      <div className={styles.inputWithIconContainer}>
        {Icon && <Icon className={styles.icon} />}
        <Input
          ref={ref}
          variant={props.variant}
          color={props.color}
          multiline={props.multiline}
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          error={props.error}
          onChange={props.onChange}
          onBlur={props.onBlur}
          maxLength={props.maxLength}
          disableArrows={props.disableArrows}
          min={props.min}
          max={props.max}
          style={{ width: "100%", boxSizing: "border-box" }}
          autofocus={props.autofocus}
        />
      </div>
    </div>
  )
});

export default TextField;
