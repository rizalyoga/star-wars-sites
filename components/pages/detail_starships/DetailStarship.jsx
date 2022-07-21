import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Data
import { fetchDetailStarship } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import DetailBody from "../../common/detail_body/DetailBody";
import sponsore from "../../../public/star_wars_banner.webp";

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
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataStarship.name} />
            <DetailBody data={dataStarship} loading={loading} />
            <div className="sponsore_container">
              <Image src={sponsore} alt="iklan" />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DetailStarship;
