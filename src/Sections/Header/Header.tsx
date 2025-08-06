import React from "react";
import styles from "./Header.module.scss";
import useIntersection from "../../hooks/useIntersection";

interface HeaderProps extends Omit<React.ComponentPropsWithoutRef<"header">, "children"> {}

let Header: React.FC<HeaderProps> = ({ ...rest }) => {
  let [isActive, setIsActive] = React.useState(false);

  const [sentinelRef, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0 });

  let openMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }}></div>
      <header className={styles.header + " " + (!isVisible ? styles.scrolled : "")} {...rest}>
        <nav>
          <ul className={styles["header__menu"] + " " + (isActive ? styles.active : "")}>
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
        <div
          onClick={openMenu}
          className={styles["header__hamburger-menu"] + " " + (isActive ? styles.active : "")}
        >
          <div className={styles["header__hamburger-menu-icon"]}>
            <span className={styles["line-1"]}></span>
            <span className={styles["line-2"]}></span>
            <span className={styles["line-3"]}></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
