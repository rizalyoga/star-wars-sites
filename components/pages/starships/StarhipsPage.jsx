import React from "react";
import Image from "next/image";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import CardFIlms from "../../common/card/card_films/CardFIlms";
import sponsore from "../../../public/sponsore.webp";

const StarhipsPages = ({ dataStarships }) => {
  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={"All Starship in Star Wars Universe"} />
            <div className="card_container">
              {dataStarships.map((ship, idx) => (
                <CardFIlms
                  data={ship}
                  indexData={idx}
                  url={ship.url.match(/\d+/g)}
                  key={ship.name}
                />
              ))}
            </div>
            <div className="sponsore_container">
              <Image src={sponsore} alt="iklan" />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default StarhipsPages;
