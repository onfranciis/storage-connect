import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "../components/home/Header";
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";
import ThirdSection from "../components/home/ThirdSection";
import FourthSection from "../components/home/FourthSection";
import FifthSection from "../components/home/FifthSection";
import SixthSection from "../components/home/SixthSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StorageConnect</title>
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

      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}
