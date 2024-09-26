import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./HeroSwiper.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import { SwiperOptions } from "swiper/types";

export interface SlideData {
  title: string;
  header: string;
  text: string;
}

interface CustomButtonProps {
  buttonType: "prev" | "next";
  swiperRef: React.RefObject<any>;
}

const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({ buttonType, swiperRef }) => {
    const slidePrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };

    const slideNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };

    return (
      <div
        className={
          styles["swiper__button-box"] +
          " " +
          styles[`swiper__button-box_${buttonType}`]
        }
        onClick={buttonType == "prev" ? slidePrev : slideNext}
      >
        <i
          className={
            styles["swiper__navigation"] +
            " " +
            (buttonType == "prev" ? " fa fa-angle-left" : " fa fa-angle-right")
          }
        ></i>
      </div>
    );
  }
);

const createSlide = (data: SlideData, key?: string | number) => {
  return (
    <SwiperSlide key={key}>
      <article className={styles.slide}>
        <p className={styles.slide__title}>{data.title}</p>
        <h2 className={styles.slide__header}>{data.header}</h2>
        <p className={styles.slide__text}>{data.text}</p>
      </article>
    </SwiperSlide>
  );
};

interface SwiperProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  data: SlideData[];
}

const HeroSwiperOptions: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: "." + styles["swiper__pagination"],
    clickable: true,
    renderBullet: (_, className) => {
      return `<span class="${className} ${styles["swiper__pagination-bullet"]}"></span>`;
    },
  },
  modules: [Pagination],
};

let UniversalSwiper: React.FC<SwiperProps> = React.memo(
  ({ className, data, ...rest }) => {
    const swiperRef = React.useRef<any>(null);

    let slides = React.useMemo(
      () => data.map((el, i) => createSlide(el, i)),
      []
    );

    return (
      <div className={styles["swiper"] + " " + (className || "")} {...rest}>
        <Swiper ref={swiperRef} {...HeroSwiperOptions}>
          {slides}

          <div className={styles["swiper__pagination"]}></div>
        </Swiper>

        <CustomButton buttonType="prev" swiperRef={swiperRef} />
        <CustomButton buttonType="next" swiperRef={swiperRef} />
      </div>
    );
  }
);

export default UniversalSwiper;
