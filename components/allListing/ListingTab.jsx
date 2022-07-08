import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/Listing.module.scss";
import NotificationPopUp from "./NotificationPopUp";
const ListGray = "/List.png";
const ListBlue = "/ListFilled.png";
const GridGray = "/Grid.png";
const GridBlue = "/GridFilled.png";
const Filter = "/Swap.png";
const NotificationBlue = "/Notifcation.png";
const NotificationYellow = "/bellYellow.png";

const ListingTab = (props) => {
  const [notification, setNotification] = useState(false);
  const [notificationColor, setNotificationColor] = useState("Blue");

  return (
    <>
      <NotificationPopUp
        notification={notification}
        setNotification={(data) => {
          setNotification(data);
        }}
      />
      <div className={styles.ListingTab}>
        <div className={styles.views}>
          <button onClick={() => props.setView("List")}>
            <div>
              <Image
                alt=""
                src={props.view == "List" ? ListBlue : ListGray}
                height={17}
                width={20}
              />
            </div>
            <p
              style={{
                fontWeight: props.view == "List" ? "500" : "400",
                color: props.view == "List" ? "#1849c6" : "rgba(0, 1, 3, 0.7)",
              }}
            >
              List View
            </p>
          </button>

          <button onClick={() => props.setView("Grid")}>
            <div>
              <Image
                alt=""
                src={props.view == "Grid" ? GridBlue : GridGray}
                height={19}
                width={20}
              />
            </div>
            <p
              style={{
                fontWeight: props.view == "Grid" ? "500" : "400",
                color: props.view == "Grid" ? "#1849c6" : "rgba(0, 1, 3, 0.7)",
              }}
            >
              Grid View
            </p>
          </button>
        </div>

        <button
          className={styles.notification}
          onClick={() => {
            setNotification(true);
            setNotificationColor("Yellow");
          }}
        >
          <div>
            <Image
              alt=""
              src={
                notificationColor == "Yellow"
                  ? NotificationYellow
                  : NotificationBlue
              }
              height={22.86}
              width={20}
            />
          </div>
          <p>Get notified of this search</p>
        </button>

        <div className={styles.filter}>
          <div className={styles.sort}>
            <div>
              <Image alt="" src={Filter} height={18} width={20} />
            </div>
            <p>Sort by:</p>
          </div>
          <select>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ListingTab;
