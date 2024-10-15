import Container from "../../components/Container/Container";
import styles from "./Features.module.scss";

import laptop from "../../assets/images/Features/laptop.png";
import FeaturesSwiper from "../../components/FeaturesSwiper/FeaturesSwiper";
import React from "react";

import { useMediaQuery } from "react-responsive";

interface FeaturesProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Features: React.FC<FeaturesProps> = ({ ...rest }) => {
  let [swiperContainerHeight, setswiperContainerHeight] = React.useState(0);
  let swiperContainerRef = React.useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  React.useLayoutEffect(() => {
    if (!swiperContainerRef.current) return;

    const handleResize = () => {
      if (!swiperContainerRef?.current?.parentElement) return;

      const parentRect = swiperContainerRef.current.parentElement?.getBoundingClientRect();

      const computedStyles = getComputedStyle(
        swiperContainerRef.current.parentElement
      );
      const paddingTop = parseFloat(computedStyles.paddingTop);
      const paddingBottom = parseFloat(computedStyles.paddingBottom);

      if (parentRect) {
        const parentHeight = parentRect.height - paddingTop - paddingBottom;

        const adjustedHeight = parentHeight;
        setswiperContainerHeight(adjustedHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiperContainerHeight]);

  return (
    <section className={styles.features} {...rest}>
      <Container className={styles.features__container}>
        <div className={styles["features__laptop-box"]}>
          <img
            className={
              styles["features__laptop-image"] + " " + styles.features__image
            }
            src={laptop}
            alt="Laptop"
          />
        </div>

        <div
          ref={swiperContainerRef}
          style={isMobile ? {} : { height: `${swiperContainerHeight}px` }}
          className={styles["features__swiper-wrap"]}
        >
          <FeaturesSwiper />
        </div>
      </Container>
    </section>
  );
};

export default Features;
