import { useState } from "react";
import styles from "../../styles/Learn.module.scss";
import TabBody from "./TabBody";
import TabHeading from "./TabHeading";

const Tab = () => {
  const [tab, setTab] = useState("All Categories");

  return (
    <div className={styles.Tab}>
      <TabHeading
        Tab={tab}
        setTab={(data) => {
          setTab(data);
        }}
      />
      <TabBody Tab={tab} />
    </div>
  );
};

export default Tab;
