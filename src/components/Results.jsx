import GameState from "./GameState";

const Results = ({ playerTurn, xScores, oScores, drawScores, gameState }) => {
  return (
    <div className="board__results">
      <div className={`board__results--square board__results--player-x`}>
        <span
          className={
            playerTurn === "X" && gameState === GameState.inProgress
              ? `board__results--player-x__move`
              : null
          }
        >
          Player X
        </span>
        <span>{xScores}</span>
      </div>
      <div className="board__results--square board__results--draw">
        <span>Draw</span>
        <span>{drawScores}</span>
      </div>
      <div className="board__results--square board__results--player-o">
        <span
          className={
            playerTurn === "O" && gameState === GameState.inProgress
              ? `board__results--player-o__move`
              : null
          }
        >
          Player O
        </span>
        <span>{oScores}</span>
      </div>
    </div>
  );
};

export default Results;
