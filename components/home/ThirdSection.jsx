import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";

const ThirdSection = () => {
  return (
    <div className={styles.ThirdSection}>
      <div className={styles.text}>
        <h2>Do you have a Self Storage for Sale?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>
        <button>Sell Your Self Storage</button>
      </div>

      <div className={styles.image}>
        <Image src="/manWithContainer.png" height={672} width={679} alt="" />
      </div>
    </div>
  );
};

export default ThirdSection;
