import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.scss";

const FourthSection = () => {
  return (
    <div className={styles.FourthSection}>
      <div className={styles.image}>
        <Image src="/lady.png" height={672} width={679} alt="" />
      </div>

      <div className={styles.text}>
        <h2>Do you want to buy a Self Storage?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>
        <button>Buy a Self Storage</button>
      </div>
    </div>
  );
};

export default FourthSection;
