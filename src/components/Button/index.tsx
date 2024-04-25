import { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  variant: keyof typeof variants;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: styles.button__primary,
  secondary: styles.button__seconday,
};

export function Button({
  children,
  variant,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      {...rest}
    >
      {LeftIcon && <LeftIcon />}
      {children && children}
      {RightIcon && <RightIcon />}
    </button>
  );
}
