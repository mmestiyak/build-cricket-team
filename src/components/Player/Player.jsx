import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faDollarSign} from '@fortawesome/free-solid-svg-icons';
import "./Player.css";
const Player = ({player , onAddToTeam}) => {
  const { name, image, role, bowlingStyle, battingStyle, birthPlace, monthlyIncome } = player;

  return (
    <div className="card my-3 border-secondary">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h6 className="card-title">{name} <small className="text-secondary">{role}</small></h6>
        <div className="card-text">
          <p className="small"><FontAwesomeIcon icon={faHome}/> {birthPlace} </p>
          <p className="small"><FontAwesomeIcon icon={faDollarSign}/> BDT {monthlyIncome} lakh/month </p>
          <p className="small">Batting Style: {battingStyle}</p>
          <p className="small">Bowling Style: {bowlingStyle}</p>
        </div>
      </div>
      <div className="card-footer">
        <button disabled={player.selected}  onClick={()=>{onAddToTeam(player);}} className="btn btn-primary">Add{player.selected? 'ed': ''} to Team</button>
      </div>
    </div>
  );
};

export default Player;
