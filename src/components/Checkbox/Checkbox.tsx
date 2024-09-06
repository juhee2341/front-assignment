"use client";

import React, { useState, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label?: string;
  defaultChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>; // HTMLInputElement에 기본적으로 제공되는 입력 요소의 속성들을 포함

/**
 * 체크박스 컴포넌트
 * @param {Object} CheckboxProps
 * @property {boolean} defaultChecked - 체크박스의 초기 체크 여부 (default: false)
 * @property {string} label - 체크박스 옆에 표시할 레이블 텍스트
 */
export const Checkbox = ({
  defaultChecked = false,
  label,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.checkboxInput}
        {...props}
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
