import { useState } from "react";
import styles from "../../styles/Learn.module.scss";
import AllCategories from "./AllCategories";
import BuyingASelfStorage from "./BuyingASelfStorage";
import OperatingASelfStorage from "./OperatingASelfStorage";
import SellingASelfStorage from "./SellingASelfStorage";
import TabButtons from "./TabButtons";

const TabBody = (props) => {
  switch (props.Tab) {
    case "All Categories":
      return <AllCategories />;
      break;

    case "Buying a Self Storage":
      return <BuyingASelfStorage />;
      break;

    case "Selling a Self Storage":
      return <SellingASelfStorage />;
      break;

    case "Operating a Self Storage":
      return <OperatingASelfStorage />;
      break;

    default:
      break;
  }

  return <div className={styles.TabBodyParent}></div>;
};

export default TabBody;
