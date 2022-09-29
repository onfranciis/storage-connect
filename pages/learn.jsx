import React, { useState } from "react";
import styles from "../styles/Learn.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Inquiry from "../components/contactUs/Inquiry";
import Paginate from "../components/learn/Paginate";
import Tab from "../components/learn/Tab";
import Head from "next/head";

const Learn = () => {
  return (
    <div className={styles.Learn}>
      <Head>
        <title>Learn - StorageConnect</title>
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar Highlighted="Learn" />
      <div className={styles.learn}>
        <h2>Learn About Self Storage</h2>
        <p>Learn everything about a self storage</p>
      </div>
      <Tab />
      {/* <Paginate /> */}

      <Footer />
    </div>
  );
};

export default Learn;
