import Container from "../../components/Container/Container";
import styles from "./ShowCase.module.scss";

import React from "react";

import image1 from "../../assets/images/Our-works/Mask.jpg";
import image2 from "../../assets/images/Our-works/Mask-1.jpg";
import image3 from "../../assets/images/Our-works/Mask-2.jpg";
import image4 from "../../assets/images/Our-works/Mask-3.jpg";

interface WorkProps {
  image: string;
  type: string;
  name: string;
  href?: string;
}

let Work: React.FC<WorkProps> = ({ image, type, name, href }) => {
  return (
    <a href={href || "#"} className={styles["show-case__work-box"]}>
      <img src={image} className={styles["show-case__work-image"]} alt={name} />
      <p className={styles["show-case__work-type"]}>{type}</p>
      <h3 className={styles["show-case__work-name"]}>{name}</h3>
    </a>
  );
};

interface ShowCaseProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let ShowCase: React.FC<ShowCaseProps> = ({ ...rest }) => {
  return (
    <section {...rest} className={styles["show-case"]}>
      <Container className={styles["show-case__container"]}>
        <div className={styles["show-case__header-wrapper"]}>
          <h2 className={styles["show-case__header"]}>Last works</h2>
          <a href="" className={styles["show-case__link"]}>
            View all Works
          </a>
        </div>

        <div className={styles["show-case__works-wrapper"]}>
          <Work image={image1} type="UI kit" name="Mozart Project" />
          <Work image={image2} type="Framework" name="Startup Framework 2.0" />
          <Work image={image3} type="Photos" name="From the Sky" />
          <Work image={image4} type="Pictures" name="Air Forces" />
        </div>
      </Container>
    </section>
  );
};

export default ShowCase;
