import { REGISTER_FORM_FIELDS } from "./constants";
import { createUserAction } from "@/services/actions/user-actions";
import styles from "./styles.module.css";
import Input from "@/components/design-system/Input";
import ButtonSectionForm from "./buttonSectionForm";

const Register = () => {
  return (
    <main>
      <form action={createUserAction} className={styles.container}>
        <div className={styles.inputWrapper}>
          {REGISTER_FORM_FIELDS.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              <Input {...field.props} />
            </div>
          ))}
        </div>
        <ButtonSectionForm />
      </form>
    </main>
  );
};

export default Register;
