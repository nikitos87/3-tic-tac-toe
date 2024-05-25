import { useEffect, useState } from "react";
import FieldsLayout from "./FieldsLayout";
import GameState from "./GameState";
import Title from "./Title";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combination: [0, 1, 2], strikeClass: "strike-row-1" },
  { combination: [3, 4, 5], strikeClass: "strike-row-2" },
  { combination: [6, 7, 8], strikeClass: "strike-row-3" },

  //   Columns
  { combination: [0, 3, 6], strikeClass: "strike-column-1" },
  { combination: [1, 4, 7], strikeClass: "strike-column-2" },
  { combination: [2, 5, 8], strikeClass: "strike-column-3" },

  //   Diagonal
  { combination: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combination: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const Game = () => {
  const [fields, setFields] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [fieldClasses, setFieldClasses] = useState(Array(9).fill(null));
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [xScores, setXScores] = useState(0);
  const [oScores, setOScores] = useState(0);
  const [drawScores, setDrawScores] = useState(0);

  const checkWinner = (fields, setStrikeClass, setGameState) => {
    for (const { combination, strikeClass } of winningCombinations) {
      const value1 = fields[combination[0]];
      const value2 = fields[combination[1]];
      const value3 = fields[combination[2]];
      if (value1 !== null && value1 === value2 && value1 === value3) {
        setStrikeClass(strikeClass);
        if (value1 === PLAYER_X) {
          setGameState(GameState.playerXWins);
          setXScores((x) => x + 1);
        } else {
          setGameState(GameState.playerOWins);
          setOScores((o) => o + 1);
        }
        return;
      }
    }

    const allFieldsFilled = fields.every((field) => field !== null);
    if (allFieldsFilled) {
      setGameState(GameState.draw);
      setDrawScores((d) => d + 1);
    }
  };

  const handleFieldClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (fields[index] !== null) {
      return;
    }

    const newFields = [...fields];
    const newFieldClasses = [...fieldClasses];
    newFields[index] = playerTurn;
    setFields(newFields);

    if (playerTurn === PLAYER_X) {
      newFieldClasses[index] = `board__fields--field__filled-x`;
      setFieldClasses(newFieldClasses);
      setPlayerTurn(PLAYER_O);
    } else {
      newFieldClasses[index] = `board__fields--field__filled-o`;
      setFieldClasses(newFieldClasses);
      setPlayerTurn(PLAYER_X);
    }
  };

  const startAgain = () => {
    setGameState(GameState.inProgress);
    setFields(Array(9).fill(null));
    setFieldClasses(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  const resetResults = () => {
    startAgain();
    setXScores(0);
    setOScores(0);
    setDrawScores(0);
  };

  useEffect(() => {
    checkWinner(fields, setStrikeClass, setGameState);
  }, [fields]);

  return (
    <>
      <FieldsLayout
        playerTurn={playerTurn}
        fields={fields}
        onFieldClick={handleFieldClick}
        fieldClasses={fieldClasses}
        strikeClass={strikeClass}
        gameState={gameState}
        startAgain={startAgain}
        resetResults={resetResults}
        xScores={xScores}
        oScores={oScores}
        drawScores={drawScores}
      />
      <Title />
    </>
  );
};

export default Game;
