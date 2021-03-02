import React from "react";
import Player from "../Player/Player";

const Players = ({ players, onAddToTeam }) => {
  return (
    <div className="row">
      {players.map((player) => {
        return (
          <div key={player.id} className="col-md-3">
            <Player  onAddToTeam={onAddToTeam} player={player} />
          </div>
        );
      })}
    </div>
  );
};

export default Players;
