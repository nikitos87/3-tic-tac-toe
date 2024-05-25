import GameState from "./GameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerXWins:
      return <div className="result">X WINS</div>;
    case GameState.playerOWins:
      return <div className="result">O WINS</div>;
    case GameState.draw:
      return <div className="result">DRAW</div>;
    default:
      return <></>;
  }
};

export default GameOver;
