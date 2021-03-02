import React, { useEffect, useState } from "react";
import playersData from "./data/data";
import { Navbar, Players, SelectedPlayers } from "./components";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
    document.title = "Select Players & Build Team";
  }, []);

  const handleButtonDisable = (player, selected) => {
    const newPlayers = [...players];
    const newPlayerIndex = newPlayers.findIndex((p) => p.id === player.id);
    newPlayers[newPlayerIndex].selected = selected ;
    setPlayers(newPlayers);
  }

  const handleAddToTeam = (player) => {
    const newSelectedPlayers = [...selectedPlayers];
    if (!newSelectedPlayers.some((p) => p.id === player.id)) {
      newSelectedPlayers.push(player);
      setSelectedPlayers(newSelectedPlayers);

      handleButtonDisable(player, true)
    }

  };
  const handleRemoveFromTeam = (player) => {
    handleButtonDisable(player, false)
    const newSelectedPlayers = selectedPlayers.filter(p => p.id !== player.id);
    setSelectedPlayers(newSelectedPlayers);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <Players onAddToTeam={handleAddToTeam} players={players} />
        </div>
        <div className="col-sm-12 col-md-3">
          <SelectedPlayers
            onDelete={handleRemoveFromTeam}
            selectedPlayers={selectedPlayers}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
