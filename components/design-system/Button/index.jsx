"use client";
import React from "react";
import { VARIANTS, verifyVariants } from "./constants";
import styles from "./styles.module.css";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = VARIANTS.STANDARD,
  ...props
}) => {
  const verifiedVariant = verifyVariants(variant);

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[verifiedVariant]}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
