import React, { useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import Button from "./components/Button";

function App() {
  const [heroStats, setHeroStats] = useState({
    currentHealth: 100,
    maxHealth: 100,
    rolls: []
  });
  const [monsterStats, setMonsterStats] = useState({
    currentHealth: 100,
    maxHealth: 100,
    rolls: []
  });
  const DiceCasting = () => {
    return Math.floor(Math.random() * 6) + 1;
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

  return (
    <div className="App">
      <header className="App-header">
        <CharacterCard name="Hero" stats={heroStats} />
        <CharacterCard name="Monster" stats={monsterStats} />
        <Button onClick={attackHandler}>Attack</Button>
      </header>
    </div>
  );
}

export default App;
