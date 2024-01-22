"use client";
import Button from "@/components/design-system/Button";
import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const ButtonSectionForm = () => {
  const { push } = useRouter();

  const onCancel = () => {
    push("/Login");
  };
  return (
    <div className={styles.buttonsWrapper}>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">Send</Button>
    </div>
  );
};

export default ButtonSectionForm;
