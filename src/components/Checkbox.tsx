import React, { InputHTMLAttributes } from "react";

type CheckboxProps = {
  checked: boolean;
} & InputHTMLAttributes<HTMLInputElement>; // HTMLInputElement에 기본적으로 제공되는 입력 요소의 속성들을 포함

// 체크박스의 상태에 따라 테마 스타일을 정의하는 함수
const getVariantClasses = (checked: boolean) => {
  return checked
    ? "bg-blue-600 border-blue-600 focus:ring-blue-600"
    : "bg-gray-200 border-gray-300 focus:ring-gray-300";
};

/**
 * 체크박스 컴포넌트
 * @param {Object} CheckboxProps
 * @property {boolean} checked - 체크박스의 체크 여부 (defualt: false)
 */
export const Checkbox = ({ checked = false, ...props }: CheckboxProps) => {
  // 체크박스에 적용할 스타일 클래스
  const variantClass = getVariantClasses(checked);

  return (
    <input
      type="checkbox"
      checked={checked}
      className={`${variantClass} inline-flex items-center just ify-center border rounded-md focus:outline-none transition-colors focus:ring-2 focus:ring-offset-2appearance-none checked:accent-checked`}
      {...props}
    />
  );
};
