import styles from "../../styles/Learn.module.scss";

const TabButtons = (props) => {
  return (
    <div className={styles.TabButtons} onClick={() => props.setTab(props.Text)}>
      <p
        className={styles.text}
        style={{
          fontWeight: props.Tab == props.Text ? "600" : "500",
          color:
            props.Tab == props.Text
              ? "rgba(24, 73, 198, 1)"
              : "rgba(0, 1, 3, 0.7)",
        }}
      >
        {props.Text}
      </p>
      <div
        className={styles.marker}
        style={{ opacity: props.Tab == props.Text ? "1" : "0" }}
      ></div>
    </div>
  );
};

export default TabButtons;
