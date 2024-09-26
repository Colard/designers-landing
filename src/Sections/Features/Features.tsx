import Container from "../../components/Container/Container";
import styles from "./Features.module.scss";

import laptop from "../../assets/images/Features/laptop.png";
import FeaturesSwiper from "../../components/FeaturesSwiper/FeaturesSwiper";
import React from "react";

type FeaturesPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;
interface FeaturesProps extends FeaturesPropsWithoutChildren {}

let Features: React.FC<FeaturesProps> = ({ ...rest }) => {
  let [swiperContainerHeight, setswiperContainerHeight] = React.useState(0);
  let swiperContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!swiperContainerRef.current) return;
    
    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries[0].contentRect) {
        const newHeight = entries[0].contentRect.height;
        setswiperContainerHeight(newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(swiperContainerRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [swiperContainerHeight]);

  return (
    <section ref={swiperContainerRef} className={styles.features} {...rest}>
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

        <div style={{height: `${swiperContainerHeight}px`}} className={styles["features__swiper-wrap"]}>
          <FeaturesSwiper />
        </div>
      </Container>
    </section>
  );
};

export default Features;
