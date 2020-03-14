import React from "react";

const CharacterCard = ({ name, stats = {} }) => {
  return (
    <>
      <label for={name}>{name}:</label>
      <progress
        id={name}
        max={stats.maxHealth}
        value={stats.currentHealth}
      ></progress>
    </>
  );
};

export default CharacterCard;
