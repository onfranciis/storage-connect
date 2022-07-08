import React, { useState } from "react";
import styles from "../styles/Evaluation.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Inquiry from "../components/contactUs/Inquiry";

const Evaluation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.Evaluation}>
      <Navbar Highlighted="Free Evaluation" />

      {submitted ? (
        <Inquiry />
      ) : (
        <>
          <div className={styles.Get}>
            <h2>Get Your Self Storage Evaluated</h2>
            <p>Let’s help you determine what your self storage is worth</p>
          </div>

          <div className={styles.article}>
            <div className={styles.imageParent}>
              <Image src="/image8.png" alt="" height={363.99} width={450.4} />
            </div>
            <div className={styles.body}>
              <p className={styles.title}>Have a Self Storage??</p>
              <p>
                Using our platform is the go to place on the internet for
                anything that has to do with Self Storage, we’ll help you
                determine what your Self Storage is worth,
              </p>
              <p>
                kindly share some information about you and your Self Storage
                with us and a dedicated account manager will get in touch
              </p>
            </div>
          </div>
          <div className={styles.LetUsKnow}>
            <p>
              Let us know about you and your Self Storage, drop some information
              that would help us carry out the evaluation effectively
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

export default Evaluation;
