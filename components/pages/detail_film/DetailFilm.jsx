import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// FetchData
import { fetchDetailFilm } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";

const DetailFilm = () => {
  const [dataFilm, setDataFilm] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchDetailFilm(id).then((res) => setDataFilm(res));
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataFilm.title} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DetailFilm;
