import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps
  extends Omit<React.ComponentPropsWithoutRef<"header">, "children"> {}

let Header: React.FC<HeaderProps> = React.memo(({ ...rest }) => {
  return (
    <header className={styles.header} {...rest}>
      <nav>
        <ul className={styles["header__menu"]}>
          <li>
            <a className={styles["header__navigate-link"]} href="#">
              Home
            </a>
          </li>

          <li>
            <a className={styles["header__navigate-link"]} href="#">
              Features
            </a>
          </li>

          <li>
            <a className={styles["header__navigate-link"]} href="#">
              Pricing
            </a>
          </li>

          <li>
            <a className={styles["header__navigate-link"]} href="#">
              Blog
            </a>
          </li>

          <li>
            <a className={styles["header__navigate-link"]} href="#">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>

          <li>
            <a className={styles["header__navigate-link"]} href="#">
              <i className="fab fa-behance"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
