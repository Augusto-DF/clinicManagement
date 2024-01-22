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
  error,
  onChange,
  ...props
}) => {
  const inputStyle = useMemo(() => {
    const verifiedVariant = verifyVariant(variant);
    return `${styles.input} ${styles[verifiedVariant]}`;
  }, [variant]);

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={`${styles.inputWrapper} ${error && styles.error}`}>
      <input
        className={inputStyle}
        type={type}
        name={name}
        value={value}
        ref={inputRef}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <span>
          {typeof error === "string" ? error : "This field is required"}
        </span>
      )}
    </div>
  );
};

export default Input;
