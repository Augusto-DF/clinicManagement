"use client";

import Button from "@/components/design-system/Button";
import Input from "@/components/design-system/Input";
import Link from "next/link";
import styles from "./styles.module.css";
import { loginAction } from "@/services/actions/auth-actions";
import { useRouter } from "next/navigation";

const Login = () => {
  const { push } = useRouter();

  const onSubmit = async (event) => {
    // TODO: Verify if the user is logged and if true redirect to '/dashboard'
    // TIP: Use useSession hook of the NextAuth
    // const isLogged = () => {}

    /* useEffect(() => {
      if(isLogged()) push('/dashboard')
    }, []) */

    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const res = await loginAction(formData);

    if (res.ok) {
      push("/dashboard");
    } else {
      // TODO: Build the error callback
      // errorCallback()

      // Provisory callback
      alert(`${res.error} - Status: ${res.status}`);
    }
  };

  return (
    <main>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            placeholder="Email or username"
            alt="Tap your email or username"
            name="username"
          />
          <Input
            type="password"
            placeholder="Password"
            alt="Tap your password"
            name="password"
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
