import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";

// Component
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  // Direction function
  const toHomePage = () => {
    router.push("/");
  };
  const toStarshipPage = () => {
    router.push("/starships");
  };
  const toCharacterPage = () => {
    router.push("/character");
  };

  const showSidebar = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <Sidebar
        isShow={isShow}
        showSidebar={showSidebar}
        toHomePage={toHomePage}
        toCharacterPage={toCharacterPage}
        toStarshipPage={toStarshipPage}
      />
      <div className={styles.navbar__container}>
        <div className={styles.navbar__inner_container}>
          <div className={styles.navbar__left_content}>
            <Image
              className={styles.navbar__logo}
              src="/star-wars.png"
              width={75}
              height={35}
              alt="logo"
            />
          </div>
          <div className={styles.navbar__right_content}>
            <ul>
              <li onClick={toHomePage}>Films</li>
              <li onClick={toCharacterPage}>Character</li>
              <li onClick={toStarshipPage}>Starships</li>
            </ul>
            {isShow ? (
              ""
            ) : (
              <FiMenu
                className={styles.navbar__menu_icon}
                onClick={showSidebar}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
