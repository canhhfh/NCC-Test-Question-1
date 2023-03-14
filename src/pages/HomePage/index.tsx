import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import styles from "./HomePage.module.scss";

type Props = {};

const HomePage = (props: Props) => {
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

export default HomePage;
