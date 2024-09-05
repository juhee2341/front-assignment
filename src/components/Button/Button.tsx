import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "dangerous";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>; // HTMLButtonElement에 기본적으로 제공되는 버튼 요소의 속성들을 포함

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-3 py-1.5 text-sm w-14",
  medium: "px-4 py-2 text-base w-20",
  large: "px-6 py-3 text-lg w-28",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
  dangerous: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

/**
 * 버튼 컴포넌트
 * @param {Object} ButtonProps
 * @property {React.ReactNode} children - 버튼 내부에 표시할 내용
 * @property {ButtonVariant} variant - 버튼의 스타일 (default: primary)
 * @property {ButtonSize} size - 버튼의 크기 (default: medium)
 */
export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center border border-transparent rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`${baseClasses} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
