import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";

// Component
import Layout from "../../../layout/Layout";
import TitleContent from "../../common/title_content/TitleContent";
import CardFIlms from "../../common/card/card_films/CardFIlms";
import sponsore from "../../../public/sponsore.webp";

const HomePage = ({ dataFilms }) => {
  return (
    <Layout>
      <div className="container">
        <main className="main">
          <div className="inner_container">
            <TitleContent title={"All Films Starwars"} />
            <div className="card_container">
              {dataFilms.map((film, idx) => (
                <CardFIlms data={film} indexData={idx} key={film.episode_id} />
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

export default HomePage;
