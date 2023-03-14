import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar-list-items"]}>
        <div className={styles["sidebar-item"]}>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            <p className={styles["sidebar-item__name"]}>Home</p>
          </NavLink>
        </div>
        <div className={styles["sidebar-item"]}>
          <NavLink
            to={"/services"}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            <p className={styles["sidebar-item__name"]}>Services</p>
          </NavLink>
        </div>
        <div className={styles["sidebar-item"]}>
          <NavLink
            to={"/news"}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            <p className={styles["sidebar-item__name"]}>News</p>
          </NavLink>
        </div>
        <div className={styles["sidebar-item"]}>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            <p className={styles["sidebar-item__name"]}>Blog</p>
          </NavLink>
        </div>
        <div className={styles["sidebar-item"]}>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            <p className={styles["sidebar-item__name"]}>Contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
