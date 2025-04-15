import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import HeroSwiper, { SlideData } from "../../components/HeroSwiper/HeroSwiper";
import styles from "./Hero.module.scss";
import React from "react";

let initialData: SlideData[] = [
  {
    title: "Startup 1",
    header: "Forget About Code",
    text:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    title: "Startup 2",
    header: "Forget About Code2",
    text:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    title: "Startup 3",
    header: "Forget About Code",
    text:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    title: "Startup 4",
    header: "Forget About Code4",
    text:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
  },

  {
    title: "Startup 5",
    header: "Forget About Code5",
    text:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
];

interface HeroProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Hero: React.FC<HeroProps> = ({ ...rest }) => {
  return (
    <section className={styles.hero} {...rest}>
      <Container>
        <article className={styles.hero__slider}>
          <HeroSwiper data={initialData} />
        </article>

        <Button className={styles.hero__button}>Create an Account</Button>
      </Container>
    </section>
  );
};

export default Hero;
