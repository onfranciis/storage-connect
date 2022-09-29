import Image from "next/image";
import Link from "next/link";

const DefaultPic = "/unsplash_OpV94f2edwE.png";

const MinimalCard = (props) => {
  const Orientation = props.Orientation;

  return Orientation == "Grid" ? (
    <div style={MinimalCardStyle1.container}>
      <div style={MinimalCardStyle1.image}>
        <Image
          alt={props.Heading}
          src={props.Pic}
          height={267}
          width={354}
          style={{ borderRadius: 10 }}
        />
      </div>
      <div style={MinimalCardStyle1.main}>
        <div style={MinimalCardStyle1.mainItem}>
          <Image
            alt=""
            src="/location.png"
            height={20.36}
            width={16}
            style={MinimalCardStyle1.mainItemImage}
          />
          <p style={MinimalCardStyle1.mainItemText}>{props.Location}</p>
        </div>

        <div style={MinimalCardStyle1.mainItem}>
          <Image
            alt=""
            src="/building.png"
            height={16}
            width={18}
            style={MinimalCardStyle1.mainItemImage}
          />
          <p style={MinimalCardStyle1.mainItemText}>
            Total Units: {props.Units}
          </p>
        </div>

        <div style={MinimalCardStyle1.mainItem}>
          <Image
            alt=""
            src="/people.png"
            height={15.71}
            width={20}
            style={MinimalCardStyle1.mainItemImage}
          />
          <p style={MinimalCardStyle1.mainItemText}>
            Occupancy: {props.Occupancy}%
          </p>
        </div>

        <div style={MinimalCardStyle1.mainItem}>
          <Image
            alt=""
            src="/frame.png"
            height={16}
            width={16}
            style={MinimalCardStyle1.mainItemImage}
          />
          <p style={MinimalCardStyle1.mainItemText}>Size: {props.Size} Sq Ft</p>
        </div>
      </div>
      <div style={MinimalCardStyle1.buttonParent}>
        <Link href={`/post/${props.ID}`}>
          <button style={MinimalCardStyle1.button}>View More Detail</button>
        </Link>
      </div>
    </div>
  ) : (
    /* -------------------------------------------------------------------------- */
    /*                               Section Divider                              */
    /* -------------------------------------------------------------------------- */
    <div style={MinimalCardStyle2.container}>
      <div style={MinimalCardStyle2.image}>
        <Image
          alt={props.Heading}
          src={props.Pic}
          height={352}
          width={466}
          style={{ borderRadius: 20 }}
        />
      </div>
      <div style={MinimalCardStyle2.main}>
        <div style={MinimalCardStyle2.mainItemLocation}>
          <Image
            alt=""
            src="/location.png"
            height={20.36}
            width={16}
            style={MinimalCardStyle2.mainItemLocationImage}
          />
          <p style={MinimalCardStyle2.mainItemLocationText}>{props.Location}</p>
        </div>

        <p style={MinimalCardStyle2.bodyTitle}>Self Storage Heading</p>

        <div style={MinimalCardStyle2.section}>
          <div style={MinimalCardStyle2.mainItem}>
            <div style={MinimalCardStyle2.mainItemHead}>
              <Image
                alt=""
                src="/building.png"
                height={16}
                width={18}
                style={MinimalCardStyle2.mainItemImage}
              />
              <p style={MinimalCardStyle2.mainItemText}>Total Units</p>
            </div>
            <p>
              {props.Units} unit{props.Units > 1 ? "s" : ""}
            </p>
          </div>

          <div style={MinimalCardStyle2.mainItem}>
            <div style={MinimalCardStyle2.mainItemHead}>
              <Image
                alt=""
                src="/frame.png"
                height={16}
                width={16}
                style={MinimalCardStyle2.mainItemImage}
              />
              <p style={MinimalCardStyle2.mainItemText}>Size</p>
            </div>
            <p>{props.Size}</p>
          </div>

          <div style={MinimalCardStyle2.mainItem}>
            <div style={MinimalCardStyle2.mainItemHead}>
              <Image
                alt=""
                src="/people.png"
                height={15.71}
                width={20}
                style={MinimalCardStyle2.mainItemImage}
              />
              <p style={MinimalCardStyle2.mainItemText}>Occupancy</p>
            </div>
            <p>{props.Occupancy}</p>
          </div>
        </div>

        <div style={MinimalCardStyle2.buttonParent}>
          <Link href={`/post/${props.ID}`}>
            <button style={MinimalCardStyle2.button}>View More Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MinimalCard.defaultProps = {
  Orientation: "Grid",
  Pic: DefaultPic,
  Location: "localhost",
  Units: 127,
  Occupancy: 50,
  Size: "123,400",
};

const MinimalCardStyle1 = {
  container: {
    width: 399,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: "0 0 20px",
    margin: 10,
  },
  image: {
    display: "flex",
    justifyContent: "center",
    padding: "19px 0 ",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mainItem: {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: "0 0 0 10px",
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

const MinimalCardStyle2 = {
  container: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "40px",
    flex: "1",
    flexWrap: "wrap",
    padding: "32px 40px",
    margin: "15px 5px",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    // padding: "19px 0 ",
  },
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    flex: "1",
    // padding: "0 43px",
  },
  mainItem: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
    // padding: "0 0 0 10px",
  },
  mainItemHead: {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: "0 0 0 0px",
  },
  mainItemImage: {
    margin: 20,
  },
  mainItemText: {
    color: "#000103c1",
    fontSize: 16,
    fontWeight: "400",
  },
  mainItemLocation: {
    width: "fit-content",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 10,
    padding: "0 0 0 0px",
  },
  mainItemLocationImage: {
    margin: 20,
  },
  mainItemLocationText: {
    color: "#000103c1",
    fontSize: 16,
    fontWeight: "400",
  },
  bodyTitle: {
    fontWeight: "600",
    fontSize: 30,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
  },
  buttonParent: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    margin: "40px 0 0",
  },
  button: {
    height: 55,
    width: 199,
    backgroundColor: "#1849C6",
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    border: "none",
    borderRadius: 10,
    padding: "17.5px 18.5px",
  },
};

export default MinimalCard;
