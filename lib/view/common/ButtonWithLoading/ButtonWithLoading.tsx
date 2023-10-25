import { useMemo } from "react";
import Button, { IButtonProps } from "../Button/Button";
import styles from "./ButtonWithLoading.module.css";

export interface IButtonWithLoadingProps extends IButtonProps {
  loading: boolean;
}

const ButtonWithLoading = (props: IButtonWithLoadingProps) => {

  const { loading, ...buttonProps } = props;

  const _className = useMemo(() => (
    [
      props.className,
      loading ? styles.loading : undefined,
    ].filter(x => x !== undefined).join(" ")
  ), [props.className, loading]);

  return (
    <Button {...buttonProps} className={_className} disabled={props.disabled || loading} />
  );

}

export default ButtonWithLoading;
