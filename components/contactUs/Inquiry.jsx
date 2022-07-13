import React from "react";
import styles from "../../styles/Contact.module.scss";
import Image from "next/image";
import Link from "next/link";

const Inquiry = () => {
  return (
    <div className={styles.Inquiry}>
      <Image src="/goodGreen.png" alt="" height={100} width={100} />
      <p className={styles.title}>Your Inquiry Has Been Sent</p>
      <p className={styles.body}>
        We’ve recieved your inquiry and we will get in touch with you as soon as
        possible
      </p>
      <div className={styles.options}>
        <Link href="/listing">
          <button className={styles.listings}>
            <p>Active Listings</p>
          </button>
        </Link>

        <Link href="/">
          <button className={styles.home}>
            <p>Go Home</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inquiry;
