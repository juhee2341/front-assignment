"use client";

import React, { useState, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";
import { fetchUtil } from "@utils/fetchUtil";

type CheckboxProps = {
  id: string;
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
  id,
  label,
  defaultChecked = false,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = async () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);

    const updateIsDone = {
      isDone: newCheckedStatus,
      updateDt: new Date().toISOString(),
    };

    return await fetchUtil(`/list/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateIsDone),
    });
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
