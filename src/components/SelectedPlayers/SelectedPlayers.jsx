import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const SelectedselectedPlayers = ({ selectedPlayers, onDelete }) => {
  const teamBudget = selectedPlayers.reduce((acc, curr) => {
    return (acc += curr.monthlyIncome);
  }, 0);

  if (selectedPlayers.length === 0) return <h5 className="my-5">No Player Selected</h5>;
  return (
    <div className="my-5">
      <h5>
        {selectedPlayers.length} Player{selectedPlayers.length > 1 ? "s" : ""}{" "}
        Selected
      </h5>
      <ul className="list-group list-group-flush">
        {selectedPlayers.map((player) => (
          <li
            key={player.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{player.name} </span>
            <span> &#2547; {player.monthlyIncome}</span>
            <span
              onClick={() => {
                onDelete(player);
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        ))}
        <h5 className="text-center my-3">
          Team Budget: &#2547; {Math.round(teamBudget).toFixed(2)}
        </h5>
      </ul>
    </div>
  );
};

export default SelectedselectedPlayers;
