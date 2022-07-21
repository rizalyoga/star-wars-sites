import React from "react";

// Component
import CharacterPages from "../../components/pages/character/CharacterPage";

const CharacterPage = ({ dataCharacters }) => {
  return <CharacterPages dataCharacters={dataCharacters.results} />;
};

export default CharacterPage;

export async function getStaticProps() {
  const res = await fetch(`https://swapi.dev/api/people/`);
  const dataCharacters = await res.json();
  return {
    props: {
      dataCharacters,
    },
  };
}
