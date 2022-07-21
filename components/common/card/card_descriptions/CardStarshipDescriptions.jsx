import React from "react";

const CardStarshipDescriptions = ({ desc }) => {
  return (
    <div>
      <p>Starship Name : {desc.name}</p>
      <p>Starship Model : {desc.model}</p>
      <p>Starship Class : {desc.starship_class}</p>
      <p>Starship Consumables : {desc.consumables}</p>
      <p>Starship Cargo Capacity : {desc.cargo_capacity}</p>
      <p>Starship Manufacture : {desc.manufacturer}</p>
      <p>Starship crew : {desc.crew}</p>
      <p>Starship passengers : {desc.passengers}</p>
    </div>
  );
};

export default CardStarshipDescriptions;
