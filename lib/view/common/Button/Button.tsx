import { MouseEventHandler, ReactNode, useMemo } from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
  children: ReactNode;
  variant: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "tertiary" | "light" | "dark" | "warning";
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  variant,
  color,
  type,
  disabled,
  onClick,
  className,
}: IButtonProps) => {

  const _className = useMemo(() => (
    [
      styles[variant],
      color ? styles[color] : undefined,
      className,
    ].filter(x => x !== undefined).join(" ")
  ), [variant, color, className]);

  return (
    <button
      className={_className}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
