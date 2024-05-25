import Buttons from "./Buttons";
import Fields from "./Fields";
import GameOver from "./GameOver";
import Results from "./Results";

const FieldsLayout = ({
  playerTurn,
  fields,
  onFieldClick,
  fieldClasses,
  strikeClass,
  gameState,
  startAgain,
  resetResults,
  xScores,
  oScores,
  drawScores,
}) => {
  return (
    <div className="board">
      <Results
        playerTurn={playerTurn}
        xScores={xScores}
        oScores={oScores}
        drawScores={drawScores}
        gameState={gameState}
      />
      <Fields
        playerTurn={playerTurn}
        fields={fields}
        onFieldClick={onFieldClick}
        fieldClasses={fieldClasses}
        strikeClass={strikeClass}
      />
      <Buttons startAgain={startAgain} resetResults={resetResults} />
      <GameOver gameState={gameState} />
    </div>
  );
};

export default FieldsLayout;
