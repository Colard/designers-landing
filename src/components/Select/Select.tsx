import React from "react";
import styles from "./Select.module.scss";

interface Option {
  text: string;
  value: string;
}

interface SelectProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  options: Option[];
  name: string;
}

let Select: React.FC<SelectProps> = React.memo(
  ({ name, options, className, ...rest }) => {
    return (
      <div {...rest} className={styles["select"] + " " + (className || "")}>
        <select className={styles["select__hidden"]}>
          {options.map((el, i) => (
            <option key={i} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>

        <div className={styles["select__container"]}>
          <div className={styles["select__input"]}></div>
          <div>
            <ul className={styles["select__list"]}>
              {options.map((el, i) => (
                <li key={i} className={styles["select__item"]}>
                  {el.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default Select;
