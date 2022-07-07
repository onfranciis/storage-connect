import { useState } from "react";
import styles from "../../styles/Learn.module.scss";
import TabButtons from "./TabButtons";

const TabHeading = (props) => {
  return (
    <div className={styles.TabHeadingParent}>
      <div className={styles.TabHeading}>
        <TabButtons
          Text="All Categories"
          Tab={props.Tab}
          setTab={(data) => {
            props.setTab(data);
          }}
        />

        <TabButtons
          Text="Buying a Self Storage"
          Tab={props.Tab}
          setTab={(data) => {
            props.setTab(data);
          }}
        />

        <TabButtons
          Text="Selling a Self Storage"
          Tab={props.Tab}
          setTab={(data) => {
            props.setTab(data);
          }}
        />

        <TabButtons
          Text="Operating a Self Storage"
          Tab={props.Tab}
          setTab={(data) => {
            props.setTab(data);
          }}
        />
      </div>
    </div>
  );
};

export default TabHeading;
