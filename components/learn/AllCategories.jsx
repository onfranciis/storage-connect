import { useState } from "react";
import styles from "../../styles/Learn.module.scss";
import MinimalCardWithLittleDetails from "../home/MinimalCardWithLittleDetails";
import { DATA } from "./DATA1";
const Input = DATA;

export default function AllCategories(props) {
  const pageView = 6;
  const [pageCount, setPageCount] = useState(0);
  const pages = Input.slice(pageCount, pageCount + pageView);
  const numberOfPages = Math.ceil(Input.length / pageView);
  const currentPage = pageCount / pageView + 1;
  const empty = [];

  const returnData = () => {
    return pages.map((data) => (
      <MinimalCardWithLittleDetails
        key={data.id}
        Orientation={props.View}
        Units={data.units}
        Size={data.size}
        Time={`${Math.ceil(data.occupancy / 60)} Day${
          Math.ceil(data.occupancy / 60) < 2 ? "" : "s"
        } ago`}
        Title={data.location}
        Image={data.image}
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
      <div
        className={styles.paginateBody}
        style={{ flexDirection: props.View == "List" ? "column" : "row" }}
      >
        {returnData()}
      </div>
      <div className={styles.Paginate}>
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
    </div>
  );
}
