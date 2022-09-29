import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/contactUs/Navbar";
import DynamicPost from "../../components/dynamicPost/DynamicPost";
import Footer from "../../components/home/Footer";
import MinimalCardWithLittleDetails from "../../components/home/MinimalCardWithLittleDetails";
import styles from "../../styles/Dynamic.module.scss";

const index = (props) => {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
};

export default index;
