import Button from "@/components/Button";
import { BUTTON_THEMES } from "@/components/Button/constants";
import { REGISTER_FORM_FIELDS } from "./constants";
import { createUserAction } from "@/services/actions/user-actions";

const Register = () => {
  return (
    <main>
      <form action={createUserAction}>
        <div>
          {REGISTER_FORM_FIELDS.map((field, index) => (
            <>
              <label key={index}>{field.label}</label>
              <input {...field.props} />
            </>
          ))}
        </div>
        <div>
          <Button type="submit">Send</Button>
          <Button theme={BUTTON_THEMES.OUTLINED}>Cancel</Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
