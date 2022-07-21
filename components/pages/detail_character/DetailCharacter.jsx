import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Data
import { fetchDetailCharacter } from "../../../data/data";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";

const DetailCharacter = () => {
  const [dataCharacter, setDataCharacter] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchDetailCharacter(id).then((res) => setDataCharacter(res));
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={dataCharacter.name} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DetailCharacter;
