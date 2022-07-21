import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./DetailFilm.module.css";

// FetchData
import { fetchDetailFilm } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import DetailBody from "../../common/detail_body/DetailBody";
import CardDetail from "../../common/card/card_detail/CardDetail";

const DetailFilm = () => {
  const [dataFilm, setDataFilm] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchDetailFilm(id).then((res) => {
        setDataFilm(res);
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataFilm.title} />
            <DetailBody data={dataFilm} loading={loading} />
            <TitleContent title={"Characters that appear in the movie"} />
            <div className={styles.card__detail_container}>
              {dataFilm?.characters?.map((link, idx) => (
                <CardDetail data={link} key={idx} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DetailFilm;
