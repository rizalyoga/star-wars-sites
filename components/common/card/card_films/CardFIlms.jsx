import React from "react";
import styles from "./CardFilms.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

// Image
import movieImage from "../../../../public/movie.png";
import peopleImage from "../../../../public/character.png";
import starshipImage from "../../../../public/rocket.png";

const CardFIlms = ({ data, indexData, url }) => {
  const router = useRouter();

  // Funtion for check page route and return image data
  const routeCheckForImage = () => {
    if (router.route == "/") {
      return movieImage;
    } else if (router.route == "/character") {
      return peopleImage;
    } else if (router.route == "/starships") {
      return starshipImage;
    }
  };

  // Funtion for check page route and return title data
  const routeCheckForTitle = () => {
    if (router.route == "/") {
      return data.title;
    } else {
      return data.name;
    }
  };

  // // Funtion for check page route and set direction page
  const toDetailPage = (id) => {
    const idData = id + 1;

    if (router.route == "/") {
      router.push(`/films/${idData}`);
    } else if (router.route == "/character") {
      router.push(`/character/${idData}`);
    } else if (router.route == "/starships") {
      router.push(`/starships/${url}`);
    }
  };

  return (
    <div
      className={styles.card__container}
      onClick={() => toDetailPage(indexData)}
    >
      <div className={styles.card__image_film}>
        <Image
          src={routeCheckForImage()}
          width={100}
          height={100}
          alt="background"
        />
      </div>
      <div className={styles.card__title_film}>
        <p>{routeCheckForTitle()}</p>
      </div>
    </div>
  );
};

export default CardFIlms;
