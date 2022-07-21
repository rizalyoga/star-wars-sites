import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Data
import { fetchDetailStarship } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import DetailBody from "../../common/detail_body/DetailBody";

const DetailStarship = () => {
  const [dataStarship, setDataStarship] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchDetailStarship(id).then((res) => {
        setDataStarship(res);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataStarship.name} />
          </div>
          <DetailBody data={dataStarship} loading={loading} />
        </main>
      </div>
    </Layout>
  );
};

export default DetailStarship;
