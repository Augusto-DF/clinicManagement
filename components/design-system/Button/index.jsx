"use client";
import React from "react";
import { BUTTON_THEMES } from "./constants";
import styles from "./styles.module.css";

const Button = ({
  children,
  type = "button",
  onClick,
  theme = BUTTON_THEMES.DEFAULT,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[theme]}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
