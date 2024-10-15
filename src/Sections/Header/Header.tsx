import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps
  extends Omit<React.ComponentPropsWithoutRef<"header">, "children"> {}

let Header: React.FC<HeaderProps> = React.memo(({ ...rest }) => {
  let [isActive, setIsActive] = React.useState(false);

  let openMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header} {...rest}>
      <nav>
        <ul className={styles["header__menu"]+ " " + (isActive ? styles.active : "")}>
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
      <div onClick={openMenu} className={styles["header__hamburger-menu"] + " " + (isActive ? styles.active : "")}>
        <div className={styles["header__hamburger-menu-icon"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
        </div>
      </div>
    </header>
  );
});

export default Header;
