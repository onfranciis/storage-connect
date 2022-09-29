import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Listing.module.scss";
import Navbar from "../components/contactUs/Navbar";
import Footer from "../components/home/Footer";
import MinimalCard from "../components/home/MinimalCard";
import ListingTab from "../components/allListing/ListingTab";
import NotificationPopUp from "../components/allListing/NotificationPopUp";
import { useState } from "react";
import Paginate from "../components/allListing/Paginate";
import Head from "next/head";

const Listing = () => {
  const [view, setView] = useState("Grid");
  const [activePage, setActivePage] = useState({ activePage: 15 });
  const [output, setOutput] = useState();

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage({ activePage: pageNumber });
  }

  return (
    <div className={styles.Listing}>
      <Head>
        <title>Active Listings - StorageConnect</title>
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
      <Navbar Highlighted="Active Listings" />

      <div className={styles.SecondSection}>
        <div className={styles.heading}>
          <h2>All Active Self Storage Listings</h2>
        </div>
        <div className={styles.formParent}>
          <div className={styles.form}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="location">
                <p>Location</p>
                <input
                  type="text"
                  className={styles.inputsLocation}
                  placeholder="Search location"
                />
              </label>

              <div>
                <p>Properties</p>
                <div className={styles.inputs}>
                  <input
                    type="text"
                    className={styles.inputsUnitCount}
                    placeholder="Unit Count"
                  />
                  <input
                    type="text"
                    className={styles.inputsOccupancy}
                    placeholder="Occupancy%"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Search"
                className={styles.inputsSearch}
              />
            </form>
          </div>

          <div className={styles.main}>
            <ListingTab view={view} setView={(data) => setView(data)} />

            {/* PAGINATION */}

            <div className={styles.Pagination}>
              <Paginate
                Output={(data) => {
                  setOutput(data);
                }}
                View={view}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
