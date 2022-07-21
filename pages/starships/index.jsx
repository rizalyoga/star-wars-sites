import React from "react";

// Component
import StarhipsPages from "../../components/pages/starships/StarhipsPage";

const StarshipsPage = ({ dataStarships }) => {
  return <StarhipsPages dataStarships={dataStarships.results} />;
};

export default StarshipsPage;

export async function getServerSideProps() {
  const res = await fetch(`https://swapi.dev/api/starships/`);
  const dataStarships = await res.json();
  return {
    props: {
      dataStarships,
    },
  };
}
