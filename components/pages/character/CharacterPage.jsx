import React from "react";
import Image from "next/image";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import CardFIlms from "../../common/card/card_films/CardFIlms";
import sponsore from "../../../public/sponsore.webp";

const CharacterPages = ({ dataCharacters }) => {
  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={"All Character in Star Wars Universe"} />
            <div className="card_container">
              {dataCharacters.map((char, idx) => (
                <CardFIlms data={char} indexData={idx} key={char.name} />
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

export default CharacterPages;
