import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.section1}>
        <div className={styles.logo}>
          <div className={styles.imageParent}>
            <Image
              alt="StorageConnect"
              src="/LogoBlue.png"
              height={27.5}
              width={30}
            />
          </div>
          <p>StorageConnect</p>
        </div>

        <p className={styles.nam}>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>

        <p className={styles.copyright}>
          © StorageConnect 2022, All Rights Reserved
        </p>
      </div>

      <div className={styles.section2}>
        <h2>QUICK LINKS</h2>

        <Link href="/listing">
          <p>Active Listings</p>
        </Link>

        <Link href="/sell">
          <p>Sell your Self Storage</p>
        </Link>

        <Link href="/evaluation">
          <p>Free Evaluation</p>
        </Link>

        <Link href="/learn">
          <p>Learn</p>
        </Link>
      </div>

      <div className={styles.section3}>
        <h2>NEWSLETTER</h2>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">
            <p>Get latest updates right in your inbox</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </label>

          <button>
            <p>Subscribe Now</p>
          </button>
        </form>
      </div>

      <div className={styles.section4}>
        <h2>LET&rsquo;S GET SOCIAL</h2>

        <div className={styles.links}>
          <Link href="">
            <Image
              alt="Facebook"
              src="/facebook.png"
              height={37.5}
              width={37.5}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/onfranciis">
            <Image
              alt="Linkedin"
              src="/linkedin.png"
              height={37.5}
              width={37.5}
            />
          </Link>

          <Link href="https://www.twitter.com/onfranciis">
            <Image
              alt="Twitter"
              src="/twitter.png"
              height={37.5}
              width={37.5}
            />
          </Link>

          <Link href="">
            <Image
              alt="Instagram"
              src="/instagram.png"
              height={37.5}
              width={37.5}
            />
          </Link>
        </div>

        <select>
          <option>English - En</option>
          <option>Francais - Fr</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
