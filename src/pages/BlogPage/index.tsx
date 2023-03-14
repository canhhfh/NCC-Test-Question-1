import React from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import styles from "./BlogPage.module.scss";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar"]}>
        <Sidebar />
      </div>
      <div className={styles["main"]}>
        <div className={styles["content"]}></div>
        <div className={styles["footer"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
