import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";
import { DATA } from "../dynamicPost/MiniDetailsData";
import MinimalCardWithLittleDetails from "./MinimalCardWithLittleDetails";

const FifthSection = () => {
  return (
    <div className={styles.FifthSection}>
      <div className={styles.heading}>
        <h2>
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h2>
        <p>
          Learn abou literally anything to know about Selling or Buying a Self
          Storage
        </p>
      </div>

      <div className={styles.cards}>
        {/* <MinimalCardWithLittleDetails
          Image="/image17.png"
          Title="Everything you need to know about how to buy a Self Storage"
          Time="5hrs ago"
          Tag="Buy"
          User="Raza"
        />

        <MinimalCardWithLittleDetails
          Image="/image16.png"
          Title="Learn Everything about managing and operating a Self Storage"
          Time="2days ago"
          Tag="Operate"
          User="Raza"
        />

        <MinimalCardWithLittleDetails
          Image="/image7.png"
          Title="Everything you need to know about selling a Self Storage"
          Time="3days ago"
          Tag="Sell"
          User="Raza"
        />

        <MinimalCardWithLittleDetails
          Image="/image19.png"
          Title="Everything you need to know about how to buy a Self Storage"
          Time="5days ago"
          Tag="Buy"
          User="Raza"
        /> */}

        {DATA.slice(3, 7).map((data) => (
          <MinimalCardWithLittleDetails
            key={data.id}
            Image={data.image}
            Title={data.title}
            Time={`${Math.ceil(data.units / 2)} days ago`}
            Tag="Sell"
            User="Raza"
            ID={data.id}
          />
        ))}
      </div>

      <button>Explore the Learning Section</button>
    </div>
  );
};

export default FifthSection;
