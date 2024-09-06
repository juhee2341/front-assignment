import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "dangerous";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Variant와 Size에 대한 클래스 매핑
const variantClasses: Record<ButtonVariant, string> = {
  primary: styles.primary,
  dangerous: styles.dangerous,
};

const sizeClasses: Record<ButtonSize, string> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
