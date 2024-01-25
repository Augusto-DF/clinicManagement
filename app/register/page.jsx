"use client";

import { REGISTER_FORM_FIELDS } from "./constants";
import { createUserAction } from "@/services/actions/user-actions";
import styles from "./styles.module.css";
import Input from "@/components/design-system/Input";
import Button from "@/components/design-system/Button";
import { useRouter } from "next/navigation";

const Register = () => {
  const { push } = useRouter();

  const onCancel = () => {
    push("/login");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { target } = event;
    const formData = new FormData(target);

    const res = await createUserAction(formData);

    if (!res?.error) push("/login");
  };
  return (
    <main>
      <form className={styles.container} onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          {REGISTER_FORM_FIELDS.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              <Input {...field.props} />
            </div>
          ))}
        </div>
        <div className={styles.buttonsWrapper}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
