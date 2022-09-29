import { useState } from "react";
import styles from "../../styles/Listing.module.scss";
import { DATA } from "../dynamicPost/MiniDetailsData";
import MinimalCard from "../home/MinimalCard";
// import { DATA } from "./DATA";
const Input = DATA;

export default function Paginate(props) {
  const pageView = 6;
  const [pageCount, setPageCount] = useState(0);
  const pages = Input.slice(pageCount, pageCount + pageView);
  const numberOfPages = Math.ceil(Input.length / pageView);
  const currentPage = pageCount / pageView + 1;
  const empty = [];

  const returnData = () => {
    return pages.map((data) => (
      <MinimalCard
        key={data.id}
        Orientation={props.View}
        Units={data.units}
        Size={data.size}
        Occupancy={data.occupancy}
        Location={data.location}
        Pic={data.image}
        ID={data.id}
      />
    ));
  };

  for (let index = 0; index < numberOfPages; index++) {
    empty.push({ id: index + 1 });
  }

  const pageNumber = () => {
    return empty.map((data) => (
      <button
        className={styles.navButton}
        key={data.id}
        onClick={() => {
          setPageCount(pageView * data.id - pageView);
        }}
        style={{ opacity: currentPage == data.id ? "0.5" : "1" }}
      >
        {data.id}
      </button>
    ));
  };

  // props.Output(returnData());

  return (
    <div className={styles.paginateParent}>
      <div className={styles.Paginate}>
        <p>{Input.length} Listings found</p>
        <div className={styles.right}>
          {/* <p>Start Array is {pageCount}</p>
          <p>End Array is {pageCount + pageView}</p>
          <p>Page Count is {pageCount}</p>
          <p>Number of items is {Input.length}</p>
          <p>Number of pages to expect is {numberOfPages}</p>
          <p>Current page is {currentPage}</p> */}
          {/* <button
          className={styles.first}
          onClick={() => {
          if (pageCount > 0) {
            setPageCount(0);
          }
          }}
          >
          <p>First</p>
          </button> */}

          <button
            className={styles.prev}
            onClick={() => {
              if (pageCount > 0) {
                setPageCount(pageCount - pageView);
              }
            }}
            style={{ opacity: pageCount == 0 ? "0.5" : "1" }}
          >
            <p>{"<"}</p>
          </button>

          <div className={styles.buttons}>{pageNumber()}</div>

          <button
            className={styles.next}
            onClick={() => {
              if (pageCount + pageView < Input.length) {
                setPageCount(pageCount + pageView);
              }
            }}
            style={{ opacity: pageCount == Input.length - 1 ? "0.5" : "1" }}
          >
            <p>{">"}</p>
          </button>
          {/* <button
        className={styles.last}
        onClick={() => {
          setPageCount(Input.length - 1);
        }}
      >
        <p>Last</p>
      </button> */}
        </div>
      </div>
      <div
        className={styles.paginateBody}
        style={{ flexDirection: props.View == "List" ? "column" : "row" }}
      >
        {returnData()}
      </div>

      <div className={styles.Paginate}>
        <p></p>
        <div className={styles.right}>
          <button
            className={styles.prev}
            onClick={() => {
              if (pageCount > 0) {
                setPageCount(pageCount - pageView);
              }
            }}
            style={{ opacity: pageCount == 0 ? "0.5" : "1" }}
          >
            <p>{"<"}</p>
          </button>

          <div className={styles.buttons}>{pageNumber()}</div>

          <button
            className={styles.next}
            onClick={() => {
              if (pageCount + pageView < Input.length) {
                setPageCount(pageCount + pageView);
              }
            }}
            style={{ opacity: pageCount == Input.length - 1 ? "0.5" : "1" }}
          >
            <p>{">"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
