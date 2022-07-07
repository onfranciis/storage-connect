import Image from "next/image";
import Link from "next/link";

const DefaultPic = "/unsplash_OpV94f2edwE.png";

const MinimalCardWithHeading = (props) => {
  return (
    <div style={MinimalCardWithHeadingStyle.container}>
      <div style={MinimalCardWithHeadingStyle.image}>
        <Image
          alt={props.Heading}
          src={props.Pic}
          height={267}
          width={354}
          style={{ borderRadius: 10 }}
        />
      </div>
      <div>
        <p style={MinimalCardWithHeadingStyle.heading}>{props.Heading}</p>
      </div>
      <div style={MinimalCardWithHeadingStyle.main}>
        <div style={MinimalCardWithHeadingStyle.mainItem}>
          <Image
            alt=""
            src="/location.png"
            height={20.36}
            width={16}
            style={MinimalCardWithHeadingStyle.mainItemImage}
          />
          <p style={MinimalCardWithHeadingStyle.mainItemText}>
            {props.Location}
          </p>
        </div>

        <div style={MinimalCardWithHeadingStyle.mainItem}>
          <Image
            alt=""
            src="/building.png"
            height={16}
            width={18}
            style={MinimalCardWithHeadingStyle.mainItemImage}
          />
          <p style={MinimalCardWithHeadingStyle.mainItemText}>
            Total Units: {props.Units}
          </p>
        </div>

        <div style={MinimalCardWithHeadingStyle.mainItem}>
          <Image
            alt=""
            src="/frame.png"
            height={16}
            width={16}
            style={MinimalCardWithHeadingStyle.mainItemImage}
          />
          <p style={MinimalCardWithHeadingStyle.mainItemText}>
            Size: {props.Size} Sq Ft
          </p>
        </div>

        <div style={MinimalCardWithHeadingStyle.mainItem}>
          <Image
            alt=""
            src="/people.png"
            height={15.71}
            width={20}
            style={MinimalCardWithHeadingStyle.mainItemImage}
          />
          <p style={MinimalCardWithHeadingStyle.mainItemText}>
            Occupancy: {props.Occupancy}%
          </p>
        </div>
      </div>
      <div style={MinimalCardWithHeadingStyle.buttonParent}>
        <button style={MinimalCardWithHeadingStyle.button}>
          View More Detail
        </button>
      </div>
    </div>
  );
};

MinimalCardWithHeading.defaultProps = {
  Pic: DefaultPic,
  Location: "localhost",
  Units: 127,
  Occupancy: 50,
  Size: "123,400",
};

const MinimalCardWithHeadingStyle = {
  container: {
    width: 399,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: "0 0 20px",
    margin: 10,
  },
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    display: "flex",
    justifyContent: "center",
    padding: "19px 0 ",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "0 10px",
  },
  mainItem: {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: "1",
    gap: 10,
    // padding: "0 0 0 10px",
  },
  mainItemImage: {
    margin: 20,
  },
  mainItemText: {
    color: "#000103c1",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0 0",
  },
  button: {
    height: 50,
    width: 277,
    backgroundColor: "#1849C6",
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    border: "none",
    borderRadius: 10,
    padding: "15px 70.5px",
  },
};

export default MinimalCardWithHeading;
