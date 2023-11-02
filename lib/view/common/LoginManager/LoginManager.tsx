import { FormEvent, useState } from "react";
import styles from "./LoginManager.module.css";
import { loginWithEmailAndPassword } from "../Api/LoginApi";
import useAppState from "../AppState/useAppState";
import ButtonWithLoading from "../ButtonWithLoading";
import Input from "../Fields/Input";
import emailRegex from "@presentation/regexes/emailRegex";

export interface ILoginManagerProps {
  onLoginSuccess?: () => void;
  onLoginFail?: () => void;
  onError?: () => void;
  onTooManyAttempts?: () => void;
}

const LoginManager = (props: ILoginManagerProps) => {

  const { storeSessionState } = useAppState();
  const [loading, setLoading] = useState(false);
  const [inputEmail, setInputEmail] = useState<string | undefined>(undefined);
  const [inputPassword, setInputPassword] = useState<string | undefined>(undefined);


  const callLoginApi = async (email: string, password: string) => {
    setLoading(true);
    const response = await loginWithEmailAndPassword({
      email: email.trim(),
      password: password.trim()
    });
    setLoading(false);

    if (response.status === 401) {
      props.onLoginFail && props.onLoginFail();
    }else if(response.status === 409) {
      props.onTooManyAttempts && props.onTooManyAttempts();
    }
    else if (!response.isSuccess) {
      props.onError && props.onError();
    } else {
      storeSessionState({ isLogin: true, ...response.body });
      props.onLoginSuccess && props.onLoginSuccess();
    }

  }

  const onSubmit = (evt: FormEvent) => {
    // TODO: implement
    evt.preventDefault();
    //callLoginApi("admin.user@lumni.net", "12345678");
    if (!inputEmail || !inputPassword || !inputEmail.trim().match(emailRegex)) {
      return props.onLoginFail && props.onLoginFail();
    };
    callLoginApi(inputEmail ?? "", inputPassword ?? "");
  };

  return (
    <section className={styles.root}>
      <h1 className={styles.mainTitle}>Inicia sesión</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <h2>Inicia sesión con tu usuario y contraseña</h2>
        <div className={styles.formBox}>
          <label htmlFor="email">Correo electrónico</label>
          <Input variant="filled" id="userEmail" name="userEmail" type="text" autofocus value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)} />
        </div>
        <div className={styles.formBox}>
          <label htmlFor="password">Contraseña</label>
          <Input variant="filled" id="UserPassword" name="UserPassword" type="password" value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)} />
        </div>
        <div>
          <ButtonWithLoading loading={loading} variant="contained" color="primary" type="submit">Iniciar sesión</ButtonWithLoading>
        </div>
      </form>
    </section>
  )
};

export default LoginManager;
