import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import styles from "./HomePage.module.scss";
import logo from "../../assets/images/logo.svg";
import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/image2.svg";
import image3 from "../../assets/images/image3.svg";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sidebar"]}>
        <Sidebar />
      </div>
      <div className={styles["main"]}>
        <div className={styles["content"]}>
          <div className={styles["logo"]}>
            <img src={logo} alt="" />
          </div>
          <div className={styles["content__above"]}>
            <div className={styles["content__above__title"]}>
              <p>Lorem ipsum dolor sit asmet?</p>
            </div>
            <div className={styles["content__above__description"]}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
          </div>

          <div className={styles["content__below"]}>
            <div className={styles["content__below__list-items"]}>
              <div className={styles["content__below__list-items__item"]}>
                <div
                  className={styles["content__below__list-items__item__title"]}
                >
                  <p>Lorem ipsum dolor sit asmet</p>
                </div>
                <div
                  className={
                    styles["content__below__list-items__item__description"]
                  }
                >
                  <img src={image1} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>

              <div className={styles["content__below__list-items__item"]}>
                <div
                  className={styles["content__below__list-items__item__title"]}
                >
                  <p>Lorem ipsum dolor sit asmet</p>
                </div>
                <div
                  className={
                    styles["content__below__list-items__item__description"]
                  }
                >
                  <img src={image2} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>

              <div className={styles["content__below__list-items__item"]}>
                <div
                  className={styles["content__below__list-items__item__title"]}
                >
                  <p>Lorem ipsum dolor sit asmet</p>
                </div>
                <div
                  className={
                    styles["content__below__list-items__item__description"]
                  }
                >
                  <img src={image3} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
