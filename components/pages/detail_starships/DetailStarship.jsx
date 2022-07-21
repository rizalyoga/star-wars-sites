import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Data
import { fetchDetailStarship } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";

const DetailStarship = () => {
  const [dataStarship, setDataStarship] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchDetailStarship(id).then((res) => setDataStarship(res));
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataStarship.name} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DetailStarship;
