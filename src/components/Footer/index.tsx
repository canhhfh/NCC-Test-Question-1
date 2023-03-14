import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["copyright"]}>Copyright © 2023</div>
    </div>
  );
};

export default Footer;
