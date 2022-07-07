import React, { useState } from "react";
import styles from "../styles/Learn.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Inquiry from "../components/contactUs/Inquiry";
import Paginate from "../components/learn/Paginate";
import Tab from "../components/learn/Tab";

const Learn = () => {
  return (
    <div className={styles.Learn}>
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
