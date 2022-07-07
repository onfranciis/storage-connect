import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../../styles/Home.module.scss";
import MinimalCard from "./MinimalCard";
import MinimalCardWithHeading from "./MinimalCardWithHeading";

import { DATA } from "../dynamicPost/MiniDetailsData";

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <div className={styles.heading}>
        <h2>Active Listing Self Storages</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint
          ratione. Asperiores numquam quisquam cupiditate adipisci eos.
        </p>
      </div>
      <div className={styles.formParent}>
        <div className={styles.form}>
          <form action="">
            <label htmlFor="location">
              <p>Location</p>
              <input
                type="text"
                className={styles.inputsLocation}
                placeholder="Search location"
              />
            </label>

            <div>
              <p>Properties</p>
              <div className={styles.inputs}>
                <input
                  type="text"
                  className={styles.inputsUnitCount}
                  placeholder="Unit Count"
                />
                <input
                  type="text"
                  className={styles.inputsOccupancy}
                  placeholder="Occupancy%"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Search"
              className={styles.inputsSearch}
            />
          </form>
        </div>

        <div className={styles.main}>
          <div className={styles.cards}>
            {/* <MinimalCard
              Pic="/unsplash_OpV94f2edwE.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />

            <MinimalCard
              Pic="/image2.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />

            <MinimalCard
              Pic="/unsplash_-BQBmDlDE70.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />
            <MinimalCard
              Pic="/unsplash_-BQBmDlDE70.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />

            <MinimalCard
              Pic="/unsplash_OpV94f2edwE.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            />

            <MinimalCard
              Pic="/image2.png"
              Location="Jersey City, NJ"
              Units="89"
              Occupancy="50"
              Size="40,233"
            /> */}

            {DATA.slice(0, 3).map((data) => (
              <MinimalCard
                key={data.id}
                Pic={data.image}
                Location={data.location}
                Units={data.units}
                Occupancy={data.occupancy}
                Size={data.size}
              />
            ))}
          </div>

          <div className={styles.viewMore}>
            <button>View More Listings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
