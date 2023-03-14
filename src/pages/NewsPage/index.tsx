import React from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import styles from "./NewsPage.module.scss";

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar"]}>
        <Sidebar />
      </div>
      <div className={styles["content"]}></div>
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
