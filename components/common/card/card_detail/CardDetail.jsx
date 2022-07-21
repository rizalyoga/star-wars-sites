import React, { useEffect, useState } from "react";
import styles from "./CardDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

// Component
import LoadingSpinner from "../../loading/LoadingSpinner";

const CardDetail = ({ data }) => {
  const [dataCharacter, setdataCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Function for fetch data
  const fetchData = async () => {
    const res = await fetch(data);
    return res.json();
  };

  useEffect(() => {
    setLoading(true);
    fetchData().then((res) => {
      setdataCharacter(res);
      setLoading(false);
    });
  }, []);

  // Function for direction
  const toDetailCharacter = (id) => {
    router.push(`/character/${id}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

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
