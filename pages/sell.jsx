import React, { useState } from "react";
import styles from "../styles/Sell.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Inquiry from "../components/contactUs/Inquiry";

const Sell = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.Sell}>
      <Navbar Highlighted="Self Storage" />
      {submitted ? (
        <Inquiry />
      ) : (
        <>
          <div className={styles.SellWithEase}>
            <h2>Sell Your Self Storage With Ease</h2>
            <p>Let’s help you get the most out of your hard work</p>
          </div>

          <div className={styles.usingOurPlatform}>
            <p className={styles.tagline}>
              Using our platform is the go to place on the internet for anything
              that has to do with Self Storage, kindly share some information
              about you and your Self Storage with us and a dedicated account
              manager will get in touch
            </p>

            <div className={styles.form}>
              <form action="" onSubmit={handleForm}>
                <div className={styles.sections}>
                  <div className={styles.section}>
                    <p>Your Contact Details</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className={styles.formUser}
                    />
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Number"
                      className={styles.formPhone}
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      className={styles.formEmail}
                    />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Full address"
                      className={styles.formAddress}
                    />
                  </div>

                  <div className={styles.section}>
                    <p>Self Storage Details</p>
                    <input
                      type="text"
                      name="totalUnits"
                      id="totalUnits"
                      placeholder="Total Units"
                      className={styles.formUnits}
                    />
                    <input
                      type="text"
                      name="occupancy"
                      id="occupancy"
                      placeholder="Occupancy"
                      className={styles.formOccupancy}
                    />
                    <input
                      type="text"
                      name="storageSquareFeet"
                      id="storageSquareFeet"
                      placeholder="Storage square feet"
                      className={styles.formFeet}
                    />
                    <input
                      type="text"
                      name="storageLocation"
                      id="storageLocation"
                      placeholder="Storage location"
                      className={styles.formAddress}
                    />
                  </div>
                </div>
                <div className={styles.notice}>
                  <Image src="/info.png" alt="" height={18} width={18} />
                  <p>Your information will not be public</p>
                </div>

                <div className={styles.submit}>
                  <button>
                    <p>Send Inquiry</p>
                    <div className={styles.image}>
                      <Image src="/Send.png" alt="" height={18.62} width={16} />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Sell;
