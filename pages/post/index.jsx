import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/contactUs/Navbar";
import DynamicPost from "../../components/dynamicPost/DynamicPost";
import Footer from "../../components/home/Footer";
import MinimalCardWithLittleDetails from "../../components/home/MinimalCardWithLittleDetails";
import styles from "../../styles/Dynamic.module.scss";

const index = () => {
  return (
    <div>
      <Navbar />
      <DynamicPost />

      <div className={styles.doYou}>
        <p className={styles.title}>Do you have a Self Storage for Sale?</p>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          provident laudantium ad, ducimus fugit quo dicta beatae. Ex ab
          adipisci excepturi quidem tempora. Fugit velit assumenda laudantium
          enim deleniti ea?
        </p>

        <Link href="/sell">
          <button className={styles.button}>Sell Your Storage</button>
        </Link>
      </div>

      <div className={styles.similar}>
        <div className={styles.top}>
          <div className={styles.left}>
            <p className={styles.title}>Other Similar Post</p>
            <p className={styles.subTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              suscipit ad quia veniam dolores! Quae eum hic ipsa debitis
            </p>
          </div>
          <button className={styles.button}>
            <p>View More</p>
            <Image
              alt=""
              src="/moreRight.png"
              width={5}
              height={10}
              className={styles.clone}
            />
            <Image alt="" src="/moreRight.png" width={8} height={14} />
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        <MinimalCardWithLittleDetails
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
        />
      </div>

      <Footer />
    </div>
  );
};

export default index;
