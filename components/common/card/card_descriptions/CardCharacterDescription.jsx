import React from "react";

const CardCharacterDescription = ({ desc }) => {
  return (
    <div>
      <p>Character Name : {desc.name}</p>
      <p>Character Born : {desc.birth_year}</p>
      <p>Character Gender : {desc.gender}</p>
      <p>Character height : {desc.height} cm</p>
      <p>Character mass : {desc.mass} kg</p>
      <p>Character Eye Color : {desc.eye_color}</p>
      <p>Character Hair Color : {desc.hair_color}</p>
      <p>Character Skin Color : {desc.skin_color}</p>
    </div>
  );
};

export default CardCharacterDescription;
