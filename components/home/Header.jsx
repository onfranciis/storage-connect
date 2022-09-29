import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
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
            <p>Active Listings</p>
          </Link>
          <Link href="/sell">
            <p>Sell Your Self Storage</p>
          </Link>
          <Link href="/evaluation">
            <p>Free Evaluation</p>
          </Link>
          <Link href="/learn">
            <p>Learn</p>
          </Link>
          <Link href="/contact">
            <p className={styles.contact}>Contact</p>
          </Link>
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.heading}>
          <h2>Self Storage Business</h2>
          <h2>Buy. Sell. Learn.</h2>
        </div>
        <p className={styles.body}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          doloremque sapiente vel voluptatem expedita iste accusamus.
        </p>
        <div className={styles.buttons}>
          <Link href="/sell">
            <p className={styles.sell}>Sell Your Self Storage</p>
          </Link>
          <Link href="/listing">
            <p className={styles.active}>Active Self Storage Listings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
