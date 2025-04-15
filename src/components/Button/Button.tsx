import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

let Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={styles.button + " " + (className || "")} {...rest}>
      {children}
    </button>
  );
};

export default Button;
