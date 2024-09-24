import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Swiper.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export interface SlideData {
  title: string;
  header: string;
  text: string;
}

interface SwiperProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  data: SlideData[];
}

interface CustomButtonProps {
  buttonType: "prev" | "next";
  swiperRef: React.RefObject<any>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonType, swiperRef }) => {
  console.log(swiperRef)

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Доступ до інстансу Swiper
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Доступ до інстансу Swiper
    }
  };

  return (
    <i
      onClick={buttonType == "prev" ? slidePrev : slideNext}
      className={
        styles["swiper__navigation"] +
        " " +
        (buttonType == "prev"
          ? styles["prev"] + " fa fa-angle-left"
          : styles.next + " fa fa-angle-right")
      }
    ></i>
  );
};

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

let UniversalSwiper: React.FC<SwiperProps> = ({ className, data, ...rest }) => {
  const swiperRef = React.useRef<any>(null);

  let slides = React.useMemo(() => data.map((el, i) => createSlide(el, i)), []);

  return (
    <div className={styles["swiper"] + " " + (className || "")} {...rest}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: "." + styles["swiper__pagination"],
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles["swiper__pagination-bullet"]}"></span>`;
          },
        }}
        modules={[Pagination]}
      >
        {slides}

        <div className={styles["swiper__pagination"]}></div>
      </Swiper>

      <CustomButton buttonType="prev" swiperRef={swiperRef} />
      <CustomButton buttonType="next" swiperRef={swiperRef} />
    </div>
  );
};

export default UniversalSwiper;
