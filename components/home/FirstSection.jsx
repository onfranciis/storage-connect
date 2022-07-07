import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../../styles/Home.module.scss";
import MinimalCard from "./MinimalCard";
import MinimalCardWithHeading from "./MinimalCardWithHeading";

const FirstSection = () => {
  return (
    <div className={styles.FirstSection}>
      <div className={styles.heading}>
        <h2>Featured Self Storages</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint
          ratione. Asperiores numquam quisquam cupiditate adipisci eos.
        </p>
      </div>

      <div className={styles.cards}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          centerInsufficientSlides={true}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <MinimalCard
              Pic="/unsplash_OpV94f2edwE.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MinimalCardWithHeading
              Pic="/unsplash_-BQBmDlDE70.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
              Heading="Heading of this Self Storage"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MinimalCardWithHeading
              Pic="/image2.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
              Heading="Heading of this Self Storage"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MinimalCard
              Pic="/unsplash_OpV94f2edwE.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MinimalCardWithHeading
              Pic="/unsplash_-BQBmDlDE70.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
              Heading="Heading of this Self Storage"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MinimalCardWithHeading
              Pic="/image2.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
              Heading="Heading of this Self Storage"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FirstSection;
