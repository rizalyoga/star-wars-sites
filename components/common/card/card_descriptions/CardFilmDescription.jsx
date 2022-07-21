import React from "react";

const CardFilmDescription = ({ desc }) => {
  return (
    <div>
      <p>Film Title : {desc.title}</p>
      <p>Film Director : {desc.director}</p>
      <p>Film Producer : {desc.producer}</p>
      <p>Film Release : {desc.release_date}</p>
      <p>Film Description : </p>
      <p>{desc.opening_crawl}</p>
    </div>
  );
};

export default CardFilmDescription;
