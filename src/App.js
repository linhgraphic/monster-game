import React, { useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Button from "./components/Button";

const initialState = {
  currentHealth: 100,
  maxHealth: 100,
  rolls: []
};

function App() {
  const [heroStats, setHeroStats] = useState({ ...initialState });
  const [monsterStats, setMonsterStats] = useState({ ...initialState });
  const DiceCasting = () => {
    return Math.floor(Math.random() * 30) + 1;
  };

  const onReset = () => {
    setHeroStats({ ...initialState });
    setMonsterStats({ ...initialState });
  };

  const attackHandler = () => {
    const heroRolls = [DiceCasting(), DiceCasting()];
    setHeroStats({
      ...heroStats,
      rolls: heroStats.rolls.concat(heroRolls)
    });
    const monsterRolls = [DiceCasting(), DiceCasting()];
    setMonsterStats({
      ...monsterStats,
      rolls: monsterStats.rolls.concat(monsterRolls)
    });

    const heroScore =
      heroRolls.reduce((total, e) => total + e) -
      monsterRolls.reduce((total, e) => total + e);
    heroScore > 0
      ? setMonsterStats({
          ...monsterStats,
          currentHealth: monsterStats.currentHealth - heroScore
        })
      : setHeroStats({
          ...heroStats,
          currentHealth: heroStats.currentHealth + heroScore
        });
  };

  const gameEnded =
    heroStats.currentHealth <= 0 || monsterStats.currentHealth <= 0;

  return (
    <div className="app">
      <CharacterCard name="Hero" stats={heroStats} />
      <div className="container">
        <Button onClick={gameEnded ? onReset : attackHandler}>
          {gameEnded ? "Reset" : "Attack"}
        </Button>
        {gameEnded && (
          <h1>{heroStats.currentHealth <= 0 ? "Game Over" : "You win"}</h1>
        )}
      </div>
      <CharacterCard name="Monster" stats={monsterStats} />
    </div>
  );
}

export default App;
