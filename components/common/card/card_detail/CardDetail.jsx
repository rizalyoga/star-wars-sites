import React, { useEffect, useState } from "react";
import styles from "./CardDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const CardDetail = ({ data }) => {
  const [dataCharacter, setdataCharacter] = useState({});

  const router = useRouter();

  // Function for fetch data
  const fetchData = async () => {
    const res = await fetch(data);
    return res.json();
  };

  useEffect(() => {
    fetchData().then((res) => setdataCharacter(res));
  }, []);

  // Function for direction
  const toDetailCharacter = (id) => {
    router.push(`/character/${id}`);
  };

  return (
    <div
      className={styles.card__container}
      onClick={() => toDetailCharacter(dataCharacter.url.match(/\d+/g))}
    >
      <div className={styles.card__image_film}>
        <Image
          src={"/character.png"}
          width={100}
          height={100}
          alt="background"
        />
      </div>
      <div className={styles.card__title_film}>
        <p>{dataCharacter.name}</p>
      </div>
    </div>
  );
};

export default CardDetail;
