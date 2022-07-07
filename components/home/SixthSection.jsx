import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";

const SixthSection = () => {
  return (
    <div className={styles.SixthSection}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h2>Any Queries? Reach Out To Us</h2>
          <p>Feel free to write to us, we are happy to help you</p>
        </div>

        <div className={styles.button}>
          <Link href="/contact">
            <button>
              <p>Write to us</p>
              <div className={styles.image}>
                <Image src="/Send.png" alt="" height={18.62} width={16} />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
