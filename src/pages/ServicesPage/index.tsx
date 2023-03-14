import React, { useState } from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import styles from "./ServicesPage.module.scss";
import menuIcon from "../../assets/images/menu.png";
import classNames from "classnames";

type Props = {};

const ServicesPage = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenuIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["menubar"]}>
        <img src={menuIcon} alt="" onClick={handleClickMenuIcon} />
      </div>
      <div
        className={classNames(
          styles["sidebar"],
          isOpen ? styles["sidebar-open"] : styles["sidebar-close"]
        )}
      >
        <Sidebar />
      </div>
      <div
        className={classNames(
          styles["main"],
          isOpen ? styles["main-hidden"] : styles[""]
        )}
      >
        <div className={styles["content"]}></div>
        <div className={styles["footer"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
