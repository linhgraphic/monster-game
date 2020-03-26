import React from "react";

const CharacterCard = ({ name, stats = {} }) => {
  return (
    <div>
      <label for={name}>{name}:</label>
      <progress id={name} max={stats.maxHealth} value={stats.currentHealth} />
    </div>
  );
};

export default CharacterCard;
