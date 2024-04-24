import { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </button>
  );
}
