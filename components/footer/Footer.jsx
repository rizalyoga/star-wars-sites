import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__inner_container}>
        <div className={styles.footer__left_content}></div>
        <div className={styles.footer__logo}>
          <Image
            className={styles.logo}
            src="/star-wars.png"
            height={50}
            width={100}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
