import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Contact.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Footer from "../components/home/Footer";
import Head from "next/head";
import { useState } from "react";
import Inquiry from "../components/contactUs/Inquiry";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.Contact}>
      <Head>
        <title>Contact Us - StorageConnect</title>
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

      <Navbar />

      <div className={styles.contactUs}>
        <h2>Contact us</h2>
        <p>Let us know what we can help you with</p>
      </div>

      {submitted ? (
        <Inquiry />
      ) : (
        <div className={styles.form}>
          <form action="" onSubmit={handleForm}>
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
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message..."
              className={styles.formMessage}
            ></textarea>

            <div className={styles.submit}>
              <button>
                <p>Send Message</p>
                <div className={styles.image}>
                  <Image src="/Send.png" alt="" height={18.62} width={16} />
                </div>
              </button>
            </div>
          </form>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
