import React from "react";

const CardFilmDescription = ({ desc }) => {
  return (
    <div>
      <p>Director : {desc.director}</p>
      <p>Producer : {desc.producer}</p>
      <p>Release : {desc.release_date}</p>
      <p>Description : </p>
      <p>{desc.opening_crawl}</p>
    </div>
  );
};

export default CardFilmDescription;
