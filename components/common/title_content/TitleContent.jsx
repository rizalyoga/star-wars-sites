import React from "react";
import styles from "./TitleContent.module.css";

const TitleContent = ({ title }) => {
  return (
    <div className={styles.title_content}>
      <h3>{title}</h3>
    </div>
  );
};

export default TitleContent;
