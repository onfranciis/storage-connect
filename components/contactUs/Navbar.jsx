import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Contact.module.scss";

const Navbar = (props) => {
  return (
    <div
      className={styles.Navbar}
      style={{ backgroundColor: props.Transparent ? "transparent" : "#1849c6" }}
    >
      <nav>
        <div className={styles.LogoParent}>
          <Link href="/">
            <div className={styles.logo}>
              <div className={styles.imageParent}>
                <Image
                  alt="StorageConnect"
                  src="/LogoYellow.png"
                  height={27.5}
                  width={30}
                />
              </div>
              <p>StorageConnect</p>
            </div>
          </Link>
        </div>

        <div className={styles.Links}>
          <Link href="/listing">
            <p
              style={{
                color:
                  props.Highlighted == "Active Listings"
                    ? "rgba(255, 206, 49, 1)"
                    : "white",
                fontWeight:
                  props.Highlighted == "Active Listings" ? "600" : "400",
              }}
            >
              Active Listings
            </p>
          </Link>
          <Link href="/sell">
            <p
              style={{
                color:
                  props.Highlighted == "Self Storage"
                    ? "rgba(255, 206, 49, 1)"
                    : "white",
                fontWeight: props.Highlighted == "Self Storage" ? "600" : "400",
              }}
            >
              Sell Your Self Storage
            </p>
          </Link>
          <Link href="/evaluation">
            <p
              style={{
                color:
                  props.Highlighted == "Free Evaluation"
                    ? "rgba(255, 206, 49, 1)"
                    : "white",
                fontWeight:
                  props.Highlighted == "Free Evaluation" ? "600" : "400",
              }}
            >
              Free Evaluation
            </p>
          </Link>
          <Link href="/learn">
            <p
              style={{
                color:
                  props.Highlighted == "Learn"
                    ? "rgba(255, 206, 49, 1)"
                    : "white",
                fontWeight: props.Highlighted == "Learn" ? "600" : "400",
              }}
            >
              Learn
            </p>
          </Link>
          <Link href="/contact">
            <p className={styles.contact}>Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
