import Image from "next/image";
import Link from "next/link";
import React from "react";

const MinimalCardWithLittleDetails = (props) => {
  return (
    <div
      style={MinimalCardWithLittleDetailsStyle.container}
      className="MinimalCardWithLittleDetails"
    >
      <div style={MinimalCardWithLittleDetailsStyle.image}>
        <Image alt="" height={202} width={287} src={props.Image} />
      </div>

      <div style={MinimalCardWithLittleDetailsStyle.body}>
        <h2 style={MinimalCardWithLittleDetailsStyle.h2}>{props.Title}</h2>
        <div style={MinimalCardWithLittleDetailsStyle.tagParent}>
          <div style={MinimalCardWithLittleDetailsStyle.tag}>
            <Image
              alt=""
              height={18}
              width={18}
              src="/clock.png"
              style={MinimalCardWithLittleDetailsStyle.icon}
            />
            <p style={MinimalCardWithLittleDetailsStyle.p}>{props.Time}</p>
          </div>

          <div style={MinimalCardWithLittleDetailsStyle.tag}>
            <Image
              alt=""
              height={18}
              width={18}
              src="/tag.png"
              style={MinimalCardWithLittleDetailsStyle.icon}
            />
            <p style={MinimalCardWithLittleDetailsStyle.p}>{props.Tag}</p>
          </div>

          <div style={MinimalCardWithLittleDetailsStyle.tag}>
            <Image
              alt=""
              height={20}
              width={20}
              src="/profilePic.png"
              style={MinimalCardWithLittleDetailsStyle.icon}
            />
            <p style={MinimalCardWithLittleDetailsStyle.p}>{props.User}</p>
          </div>
        </div>
        <Link href={`/post/${props.ID}`}>
          <button style={MinimalCardWithLittleDetailsStyle.button}>
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

MinimalCardWithLittleDetails.defaultProps = {
  Image: "/image17.png",
  Title: "Lorem Ipsum",
  Time: "Just now",
  Tag: "HODL",
  User: "Admin",
};

const MinimalCardWithLittleDetailsStyle = {
  container: {
    backgroundColor: "white",
    width: 287,
    minHeight: 450,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    overflow: "hidden",
    padding: "5px 5px 0px 5px",
  },
  image: {
    borderRadius: "10px",
    overflow: "hidden",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    jusifyContent: "center",
    padding: "0 10px",
  },
  h2: {
    fontWeight: "600",
    fontSize: 20,
    // lineHeight: 30,
    color: "#2f2f2f",
    minHeight: 100,
  },
  tagParent: {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  tag: {
    height: "fit-content",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    jusifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    height: 18,
    width: 18,
  },
  p: {
    height: "fit-content",
    fontWeight: "400",
    fontSize: 14,
    color: "rgba(0, 1, 2, 0.7)",
    whiteSpace: "nowrap",
  },
  button: {
    width: "fit-content",
    backgroundColor: "#1849C6",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    padding: "10px 60px",
    margin: "20px auto",
  },
};

export default MinimalCardWithLittleDetails;
