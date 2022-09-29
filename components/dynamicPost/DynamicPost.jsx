import Image from "next/image";
import styles from "../../styles/Dynamic.module.scss";

const DynamicPost = ({ Data }) => {
  return (
    <>
      <div className={styles.DynamicPost}>
        <div className={styles.mainImage}>
          <Image alt="" src={Data.image} width={928} height={534} />
        </div>

        <p className={styles.mainTitle}>{Data.title}</p>

        <div className={styles.preview}>
          <div className={styles.previewImage}>
            <Image alt="" src={Data.image} width={391} height={244} />
          </div>
          <div className={styles.previewTexts}>
            <p className={styles.previewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
              placerat sodales. Enim elements nec tortor, massa metus. Id eget
              duis orci senectus senectus at ut tellus porttitor.
            </p>
          </div>
        </div>

        <div className={styles.body1}>
          <p className={styles.body1Title}>{Data.location}</p>
          <p className={styles.body1Body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis sed sed blandit aenean diam.
            Mattis neque leo et, donec. Hac quis neque turpis nec tortor, massa
            metus. Id eget duis orci senectus senectus at ut tellus porttitor.
            Non urna, sociis luctus dolor. Eu nec ullamcorper sollicitudin
            bibendum mi quisque mattis eu. At tempus sem interdum elit laoreet
            at tellus volutpat sed. Et id odio gravida urna, nunc feugiat ut.
            Eros non, velit ut a, leo fermentum non consequat. Purus urna massa
            lorem vitae. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium
            ornare id diam amet proin scelerisque nunc. Enim odio pharetra
            metus, pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            placerat sodales. Enim elementum hendrerit vitae convallis Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc. Enim odio pharetra metus, pulvinar phasellus
            etiam risus eu. Enim, malesuada pharetra placerat sodales. Enim
            elementum hendrerit vitae convallis
          </p>
        </div>
      </div>
      <div className={styles.previews}>
        <div className={[styles.firstPreview]}>
          <div className={styles.previewTexts}>
            <p className={styles.previewHeading}>
              More Information on how to buy a storage
            </p>
            <p className={styles.previewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            </p>
          </div>
          <div className={styles.previewImage}>
            <Image alt="" src={Data.image} width={391} height={244} />
          </div>
        </div>

        <div className={styles.secondPreview}>
          <div className={styles.previewImage}>
            <Image alt="" src={Data.image} width={391} height={244} />
          </div>

          <div className={styles.previewTexts}>
            <p className={styles.previewHeading}>
              More Information on how to buy a storage
            </p>
            <p className={styles.previewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc. Enim odio pharetra metus,
              pulvinar phasellus etiam risus eu. Enim, malesuada pharetra
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPost;
