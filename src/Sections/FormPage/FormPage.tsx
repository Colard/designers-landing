import React from "react";
import FormContainer from "../../components/FormContainer/FormContainer";
import styles from "./FormPage.module.scss";
import Container from "../../components/Container/Container";

type FormStatus = "register" | "login";

interface LoginFormProps {
  type: FormStatus;
}

let LoginForm: React.FC<LoginFormProps> = React.memo(({ type}) => {
  let [email, setemail] = React.useState("");
  let [password, setpassword] = React.useState("");

  let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "email") setemail(e.target.value);
    if (e.target.name == "password") setpassword(e.target.value);
  };

  return (
    <div className={styles["form-page__form-content"]}>
      <input
        onChange={onChange}
        className={styles["form-page__email"] + " " + "text"}
        name="email"
        placeholder="Your email"
        value={email}
      />
      <input
        onChange={onChange}
        className={styles["form-page__password"] + " " + "text"}
        type="password"
        name="password"
        placeholder="Your password"
        value={password}
      />

      <input
        className={styles["form-page__submit-button"] + " " + "button"}
        type="submit"
        value={type == "register" ? "Create an Account" : "Login"}
      />
      <div className={styles["form-page__or"]}>
        <hr className={styles["form-page__or-line"]} />
        <p className={styles["form-page__or-text"]}>or</p>
        <hr className={styles["form-page__or-line"]} />
      </div>
      <input
        type="buttom"
        className={styles["form-page__twitter"] + " " + "social-button"}
        value={"Login via Twitter"}
        readOnly
      />
    </div>
  );
});

let Form: React.FC = React.memo(() => {
  let [formStatus, setformStatus] = React.useState<FormStatus>("register");
  const [isAnimated, setIsAnimated] = React.useState(false);

  let onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    status: FormStatus
  ) => {
    e.preventDefault();
    if (formStatus != status) setIsAnimated(true);
    setformStatus(status);
  };

  return (
    <FormContainer className={styles["form-page__form"]}>
      <div className={styles["form-page__form-hedaer"]}>
        <div className={styles["form-page__mode-buttons"]}>
          <button
            onClick={(e) => onClick(e, "register")}
            className={styles["form-page__mode-button"]}
          >
            SIGN UP
          </button>
          <button
            onClick={(e) => onClick(e, "login")}
            className={styles["form-page__mode-button"]}
          >
            LOGIN
          </button>
        </div>
        <div className={styles["form-page__indicator"]}>
          <div
            data-type={formStatus}
            className={
              styles["form-page__indicator-line"] +
              " " +
              (isAnimated ? styles["animate"] : "")
            }
          ></div>
        </div>
      </div>

      {formStatus == "register" ? (
        <LoginForm type="register" />
      ) : (
        <LoginForm type="login" />
      )}
    </FormContainer>
  );
});

interface FormPageProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let FormPage: React.FC<FormPageProps> = React.memo(({ ...rest }) => {
  return (
    <section className={styles["form-page"]} {...rest}>
      <Container className={styles["form-page__container"]}>
        <div className={styles["form-page__description-part"]}>
          <div className={styles["form-page__description-box"]}>
            <h2 className={styles["form-page__header"]}>
              We solve digital problems with an outstanding creative flare
            </h2>
            <p className={styles["form-page__description"]}>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>
        </div>

        <div className={styles["form-page__form-wrapper"]}>
          <Form />
        </div>
      </Container>
    </section>
  );
});

export default FormPage;
