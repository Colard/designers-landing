import React from "react";
import styles from "./Footer.module.scss";

let Footer: React.FC<Omit<
  React.ComponentPropsWithoutRef<"footer">,
  "children"
>> = React.memo(({ ...rest }) => {
  return (
    <footer className={styles["footer"]} {...rest}>
      <div className={styles["footer__row"]}>
        <p className={styles["footer__project-name"]}>Startup</p>

        <nav className={styles["footer__nav"]}>
          <a href="" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="" target="_blank" rel="noreferrer">
            Terms
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <i className="fab fa-google-plus"></i>
          </a>
        </nav>
      </div>
      <hr />
      <div className={styles["footer__row"]}>
        <nav className={styles["footer__nav"]}>
          <a href="#call-to-action">Tour</a>
          <a href="#features">Features</a>
          <a href="#pricing-table">Pricing Plans</a>
          <a href="#show-case">Our Works</a>
          <a href="#">Brands</a>
          <a href="#contact">Contacts</a>
        </nav>

        <p className={styles["footer__copyright"]}>
          © 2024 Designmodo. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
