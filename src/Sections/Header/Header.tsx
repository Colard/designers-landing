import styles from "./Header.module.scss";

type HeaderPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"header">,
  "children"
>;
interface HeaderProps extends HeaderPropsWithoutChildren {}

let Header: React.FC<HeaderProps> = ({ ...rest }) => {
  return (
    <header className={styles.header} {...rest}>
      <menu>
        <ul className={styles["header__menu"]}>
          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              Home
            </a>
          </li>

          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              Features
            </a>
          </li>

          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              Pricing
            </a>
          </li>

          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              Blog
            </a>
          </li>

          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>

          <li className={styles["header__list-item"]}>
            <a className={styles["header__navigate-link"]} href="#">
              <i className="fab fa-behance"></i>
            </a>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
