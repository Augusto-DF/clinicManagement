"use client";
import { useMemo } from "react";
import { verifyVariant } from "./constants";
import styles from "./styles.module.css";

const Input = ({
  label,
  name,
  value,
  inputRef,
  variant,
  type = "text",
  ...props
}) => {
  const inputStyle = useMemo(() => {
    const verifiedVariant = verifyVariant(variant);
    return `${styles.input} ${styles[verifiedVariant]}`;
  }, [variant]);

  return (
    <input
      className={inputStyle}
      type={type}
      name={name}
      value={value}
      ref={inputRef}
      {...props}
    />
  );
};

export default Input;
