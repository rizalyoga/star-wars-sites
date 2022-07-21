import HomePage from "../components/pages/home/HomePage";

export default function Home({ dataFilms }) {
  return (
    <div>
      <HomePage dataFilms={dataFilms.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://swapi.dev/api/films/`);
  const dataFilms = await res.json();
  return {
    props: {
      dataFilms,
    },
  };
}
