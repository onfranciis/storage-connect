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
import { DATA } from "../dynamicPost/MiniDetailsData";

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
          // spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          centerInsufficientSlides={true}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            1450: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            540: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
          }}
        >
          {DATA.slice(0, 6).map((data) => (
            <SwiperSlide key={data.id}>
              <MinimalCardWithHeading
                Pic={data.image}
                Location={data.location}
                Units={data.units}
                Occupancy={data.occupancy}
                Size={data.size}
                Heading="Heading of this Self Storage"
                ID={data.id}
              />
            </SwiperSlide>
          ))}
          {/* 
          

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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default FirstSection;
