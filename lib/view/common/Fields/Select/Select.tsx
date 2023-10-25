import { ChangeEventHandler, CSSProperties, FocusEventHandler, ReactNode, useMemo } from "react";
import styles from "../Inputs.module.css";

export interface ISelectProps {
  children: ReactNode;
  variant: "outlined" | "filled";
  color?: "light" | "dark";
  id?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  className?: string;
}

const Select = ({ 
  children, 
  className, 
  color, 
  variant, 
  error, 
  ...selectPros 
}: ISelectProps) => {

  const _className = useMemo(() => (
    [
      styles[variant],
      color ? styles[color] : undefined,
      error ? styles.error : undefined,
      className,
    ].filter(x => x !== undefined).join(" ")
  ), [variant, color, error, className]);

  return (
    <select
      className={_className}
      {...selectPros}
    >
      {children}
    </select>
  );
}

export default Select;
