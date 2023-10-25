import styles from "../Fields.module.css";
import CheckBox from "../CheckBox";

export type ICheckBoxFieldEventHandler = (
  evt: {
    type: string,
    target: { name?: string, value: string, checked?: boolean }
  }
) => void;

export interface ICheckBoxFieldProps {
  id?: string;
  label?: string;
  htmlLabel?: string;
  color?: "light" | "dark" | "primary" | "secondary";
  name?: string;
  value?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  onChange?: ICheckBoxFieldEventHandler;
  onBlur?: ICheckBoxFieldEventHandler;
}

const CheckBoxField = (props: ICheckBoxFieldProps) => {

  return (
    <div
      className={styles.checkBox + " " + props.className}
      style={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        borderRadius: "0.4rem",
        backgroundColor: props.value === true
          ? "rgba(var(--color-primary-rgb), 0.1)"
          : undefined,
      }}>
      <div style={{ minWidth: "1.6rem" }}>
        <CheckBox
          style={{transform: "scale(1.4)", position: "relative", left: "0.1rem", top: "0.1rem", accentColor: "var(--color-primary)"}}
          name={props.name}
          disabled={props.disabled}
          checked={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          error={props.error}
          id={props.id}
        />
      </div>
      {props.label || props.htmlLabel &&
        <label
          htmlFor={props.id}
          className={styles.label + (props.error ? ` ${styles.error}` : "")}
          style={{ marginTop: 0, marginBottom: 0 }}
          dangerouslySetInnerHTML={props.htmlLabel
            ? {
              __html: props.htmlLabel,
            }
            : undefined
          }
        >
          {props.label}
        </label>
      }
    </div>
  );
};

export default CheckBoxField;
