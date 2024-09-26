import styles from "./FeaturesSwiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import React from "react";

type SlidePartWithPicturePropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
>;

type FeaturesSwiperPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"article">,
  "children"
>;

type SlidePartWithHeaderPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
>;

interface SlideContentProps extends React.ComponentPropsWithoutRef<"div"> {}

interface SlidePartWithHeaderProps
  extends SlidePartWithHeaderPropsWithoutChildren {
  header: string;
  description: string;
}

interface FeaturesSwiperProps extends FeaturesSwiperPropsWithoutChildren {}

interface SlidePartWithPictureProps
  extends SlidePartWithPicturePropsWithoutChildren {
  imageClass: string;
  subHeader: string;
  description: string;
}

let SlidePartWithHeader: React.FC<SlidePartWithHeaderProps> = ({
  header,
  description,
  ...rest
}) => {
  return (
    <div className={styles["slide-part-header"]} {...rest}>
      <h2 className={styles["slide-part-header__header"]}>{header}</h2>
      <p className={styles["slide-part-header__description"]}>{description}</p>
    </div>
  );
};

let SlidePartWithPicture: React.FC<SlidePartWithPictureProps> = ({
  imageClass,
  subHeader,
  description,
  ...rest
}) => {
  return (
    <div className={styles["slide-part-picture"]} {...rest}>
      <i className={imageClass + " " + styles["slide-part-picture__image"]}></i>
      <h3 className={styles["slide-part-picture__header"]}>{subHeader}</h3>
      <p className={styles["slide-part-picture__description"]}>{description}</p>
    </div>
  );
};

let SlideContent: React.FC<SlideContentProps> = ({ children, ...rest }) => {
  return (
    <div className={styles['swiper__slide-wrapper']}>
        <div className={styles.swiper__slide} {...rest}>
        {children}
        </div>
    </div>
  );
};

let FeaturesSwiper: React.FC<FeaturesSwiperProps> = ({
  className,
  ...rest
}) => {
  return (
    <article className={styles.swiper + " " + (className || "")} {...rest}>
      <Swiper
        slidesPerView={1}
        loop={true}
        direction="vertical"
        mousewheel={true}
        pagination={{
          el: "." + styles["swiper__pagination"],
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles["swiper__pagination-bullet"]}"></span>`;
          },
        }}
        modules={[Pagination, Mousewheel]}
      >
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
};

export default FeaturesSwiper;
