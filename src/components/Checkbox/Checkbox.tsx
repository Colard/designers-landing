import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  active?: boolean;
  markClass?: string;
  name?: string;
}

let Checkbox: React.FC<CheckboxProps> = ({
  className,
  active = false,
  name,
  markClass,
  ...rest
}) => {
  let [isActive, setIsActive] = React.useState(active);

  const handleChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.checkbox} ${isActive ? styles.active : ""} ${
        className || ""
      }`}
      onClick={handleChange}
      {...rest}
    >
      <input
        name={name}
        className={styles["checkbox__input"]}
        type="checkbox"
        checked={isActive}
        onChange={handleChange}
      />
      <i
        className={
          (markClass || "") +
          " " +
          styles["checkbox__icon"] +
          " " +
          (isActive ? styles.active : "")
        }
      ></i>
    </div>
  );
};

export default Checkbox;
