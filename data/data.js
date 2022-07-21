export const fetchDetailFilm = async (idFilm) => {
  const res = await fetch(`https://swapi.dev/api/films/${idFilm}`);
  return res.json();
};

export const fetchDetailCharacter = async (idCharacter) => {
  const res = await fetch(`https://swapi.dev/api/people/${idCharacter}`);
  return res.json();
};

export const fetchDetailStarship = async (idStarship) => {
  console.log(idStarship);
  const res = await fetch(`https://swapi.dev/api/starships/${idStarship}`);
  return res.json();
};
