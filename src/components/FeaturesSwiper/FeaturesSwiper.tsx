import styles from "./FeaturesSwiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import { SwiperOptions } from "swiper/types";
import React from "react";

import { useMediaQuery } from "react-responsive";

interface SlidePartWithHeaderProps {
  header: string;
  description: string;
}

let SlidePartWithHeader: React.FC<SlidePartWithHeaderProps> = React.memo(
  ({ header, description }) => {
    return (
      <div className={styles["slide-part-header"]}>
        <h2 className={styles["slide-part-header__header"]}>{header}</h2>
        <p className={styles["slide-part-header__description"]}>
          {description}
        </p>
      </div>
    );
  }
);

interface SlidePartWithPictureProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  imageClass: string;
  subHeader: string;
  description: string;
}

let SlidePartWithPicture: React.FC<SlidePartWithPictureProps> = React.memo(
  ({ imageClass, subHeader, description, ...rest }) => {
    return (
      <div className={styles["slide-part-picture"]} {...rest}>
        <i
          className={imageClass + " " + styles["slide-part-picture__image"]}
        ></i>
        <h3 className={styles["slide-part-picture__header"]}>{subHeader}</h3>
        <p className={styles["slide-part-picture__description"]}>
          {description}
        </p>
      </div>
    );
  }
);

interface SlideContentProps extends React.ComponentPropsWithoutRef<"div"> {}

let SlideContent: React.FC<SlideContentProps> = React.memo(({ children }) => {
  return (
    <div className={styles["swiper__slide-wrapper"]}>
      <div className={styles.swiper__slide}>{children}</div>
    </div>
  );
});

interface FeaturesSwiperProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, "children"> {}

const FeaturesSwiperOptions: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  direction: "vertical",
  pagination: {
    el: "." + styles["swiper__pagination"],
    clickable: true,
    renderBullet: (_, className: string) =>
      `<span class="${className} ${styles["swiper__pagination-bullet"]}"></span>`,
  },
  modules: [Pagination],
};

let FeaturesSwiper: React.FC<FeaturesSwiperProps> = React.memo(
  ({ className, ...rest }) => {
    const swiperSetting = React.useMemo(() => FeaturesSwiperOptions, []);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    if (isMobile) {
      swiperSetting.direction = "horizontal";
    } else {
      swiperSetting.direction = "vertical";
    }

    return (
      <article className={styles.swiper + " " + (className || "")} {...rest}>
        <Swiper {...swiperSetting}>
          <SwiperSlide>
            <SlideContent>
              <SlidePartWithHeader
                header="We Create Something New"
                description="We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-clone"
                subHeader="30 New feature pages"
                description="Startup Framework contains components and complex blocks which can easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-gem"
                subHeader="Useful Symbol Components"
                description="Samples will show you the feeling on how to play around using the components."
              />
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent>
              <SlidePartWithHeader
                header="We Create Something New"
                description="We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-clone"
                subHeader="30 New feature pages"
                description="Startup Framework contains components and complex blocks which can easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-gem"
                subHeader="Useful Symbol Components"
                description="Samples will show you the feeling on how to play around using the components."
              />
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent>
              <SlidePartWithHeader
                header="We Create Something New"
                description="We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-clone"
                subHeader="30 New feature pages"
                description="Startup Framework contains components and complex blocks which can easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-gem"
                subHeader="Useful Symbol Components"
                description="Samples will show you the feeling on how to play around using the components."
              />
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent>
              <SlidePartWithHeader
                header="We Create Something New"
                description="We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-clone"
                subHeader="30 New feature pages"
                description="Startup Framework contains components and complex blocks which can easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-gem"
                subHeader="Useful Symbol Components"
                description="Samples will show you the feeling on how to play around using the components."
              />
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent>
              <SlidePartWithHeader
                header="We Create Something New"
                description="We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-clone"
                subHeader="30 New feature pages"
                description="Startup Framework contains components and complex blocks which can easily."
              />

              <SlidePartWithPicture
                imageClass="fa-regular fa-gem"
                subHeader="Useful Symbol Components"
                description="Samples will show you the feeling on how to play around using the components."
              />
            </SlideContent>
          </SwiperSlide>
        </Swiper>

        <div className={styles.swiper__pagination}></div>
      </article>
    );
  }
);

export default FeaturesSwiper;
