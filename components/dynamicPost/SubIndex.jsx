import Image from "next/image";
import Link from "next/link";
import Navbar from "../contactUs/Navbar";
import DynamicPost from "./DynamicPost";
import Footer from "../home/Footer";
import MinimalCardWithLittleDetails from "../home/MinimalCardWithLittleDetails";
import styles from "../../styles/Dynamic.module.scss";
import { DATA } from "./MiniDetailsData";

const SubIndex = ({ Data }) => {
  return (
    <div>
      <Navbar />
      <DynamicPost Data={Data} />

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

      <Footer />
    </div>
  );
};

export default SubIndex;
