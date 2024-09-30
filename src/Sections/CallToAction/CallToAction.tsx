import styles from "./CallToAction.module.scss";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import React from "react";

interface CallToActionProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let CallToAction: React.FC<CallToActionProps> = React.memo(({ ...rest }) => {
  return (
    <section {...rest} className={styles["call-to-action"]}>
      <Container className={styles["call-to-action__container"]}>
        <div className={styles["call-to-action__text-wrapper"]}>
          <h2 className={styles["call-to-action__header"]}>
            Easy to setup. Easy to maintain
          </h2>
          <p className={styles["call-to-action__description"]}>
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end
            framework for faster and easier web development.
          </p>
        </div>
        <div className={styles["call-to-action__buttons-wrapper"]}>
          <Button className={styles["call-to-action__youtube-button"] + " " + styles["override"]}></Button>
          <Button className={styles["call-to-action__button"] + " " + styles["override"]}>
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
});

export default CallToAction;
