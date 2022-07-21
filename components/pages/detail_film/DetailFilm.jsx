import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// FetchData
import { fetchDetailFilm } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import DetailBody from "../../common/detail_body/DetailBody";

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
          </div>
          <DetailBody data={dataFilm} loading={loading} />
        </main>
      </div>
    </Layout>
  );
};

export default DetailFilm;
