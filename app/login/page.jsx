import Button from "@/components/design-system/Button";
import Input from "@/components/design-system/Input";
import { getUsers } from "@/services/user-services";
import Link from "next/link";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <main>
      <form className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            placeholder="Email or username"
            alt="Tap your email or username"
          />
          <Input
            type="password"
            placeholder="Password"
            alt="Tap your password"
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button type="submit">Login</Button>
          <Link href="../register">Register</Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
