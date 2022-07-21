import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Data
import { fetchDetailCharacter } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import DetailBody from "../../common/detail_body/DetailBody";

const DetailCharacter = () => {
  const [dataCharacter, setDataCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchDetailCharacter(id).then((res) => {
        setDataCharacter(res);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataCharacter.name} />
          </div>
          <DetailBody data={dataCharacter} loading={loading} />
        </main>
      </div>
    </Layout>
  );
};

export default DetailCharacter;
