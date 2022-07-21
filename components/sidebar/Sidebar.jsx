import React from "react";
import styles from "./Sidebar.module.css";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({
  isShow,
  showSidebar,
  toHomePage,
  toCharacterPage,
  toStarshipPage,
}) => {
  return (
    <div
      className={
        isShow ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <div className={styles.sidebar__header}>
        <div></div>
        <div className={styles.sidebar__close_button}>
          <IoMdClose onClick={showSidebar} />
        </div>
      </div>
      <div className={styles["menu-list"]}>
        <p onClick={toHomePage}>Film</p>
        <p onClick={toCharacterPage}>Character</p>
        <p onClick={toStarshipPage}>Starship</p>
      </div>
    </div>
  );
};

export default Sidebar;
