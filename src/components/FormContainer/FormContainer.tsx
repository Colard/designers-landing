import React from "react";
import styles from "./FormContainer.module.scss";

interface FormContainerProps extends React.ComponentPropsWithoutRef<"form"> {}

let FormContainer: React.FC<FormContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <form className={styles.form + " " + (className || "")} {...rest}>
      {children}
    </form>
  );
};

export default FormContainer;
