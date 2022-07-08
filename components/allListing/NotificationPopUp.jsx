import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Listing.module.scss";

const Close = "/closeAsh.png";
const Bell = "/BlueBell.png";
const Send = "/Send2.png";

const NotificationPopUp = (props) => {
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div
      className={styles.NotificationPopUp}
      style={{ display: props.notification ? "flex" : "none" }}
    >
      <div className={styles.mainParent}>
        <div className={styles.closeParent}>
          <button
            className={styles.close}
            onClick={() => {
              props.setNotification(false);
            }}
          >
            <div className={styles.image}>
              <Image src={Close} alt="" height={35} width={35} />
            </div>
          </button>
        </div>
        <div className={styles.main}>
          <Image alt="bell" src={Bell} height={57.15} width={50} />
          <p>We will alert you anytime we have this specific self storage</p>
          <form action="" onSubmit={handleForm}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button>
              <p>Notify Me</p>
              <div className={styles.image}>
                <Image src={Send} alt="" height={18.62} width={16} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopUp;
