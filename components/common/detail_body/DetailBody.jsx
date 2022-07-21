import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./DetailBody.module.css";

// Component
import CardFilmDescription from "../card/card_descriptions/CardFilmDescription";
import CardCharacterDescription from "../card/card_descriptions/CardCharacterDescription";
import CardStarshipDescriptions from "../card/card_descriptions/CardStarshipDescriptions";
import Loading from "../loading/Loading";

// image
import rocketImage from "../../../public/rocket.png";
import filmImage from "../../../public/movie.png";
import characterImage from "../../../public/character.png";

const DetailBody = ({ data, loading }) => {
  const router = useRouter();

  const routeCheckForBodyDetail = () => {
    if (router.asPath.includes("films")) {
      return <CardFilmDescription desc={data} />;
    } else if (router.asPath.includes("character")) {
      return <CardCharacterDescription desc={data} />;
    } else if (router.asPath.includes("starships")) {
      return <CardStarshipDescriptions desc={data} />;
    }
  };

  const routeCheckForImage = () => {
    if (router.asPath.includes("films")) {
      return filmImage;
    } else if (router.asPath.includes("character")) {
      return characterImage;
    } else if (router.asPath.includes("starships")) {
      return rocketImage;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.detail__content_container}>
      <div className={styles.detail__iamage_content}>
        <Image
          className={styles.image_profile}
          src={routeCheckForImage()}
          alt="image-profile"
          height={300}
          width={300}
        />
      </div>
      <div className={styles.detail__desc_content}>
        {routeCheckForBodyDetail()}
      </div>
    </div>
  );
};

export default DetailBody;
