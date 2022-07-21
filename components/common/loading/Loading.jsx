import React from "react";
import styles from "./Loading.module.css";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles["container-loading"]}>
      <Image src="/star-wars.png" alt="icon" height={100} width={200} />
      <span className={styles.back}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </span>
    </div>
  );
};

export default Loading;
