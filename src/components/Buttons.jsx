import ResetButton from "./ResetButton";
import StartAgainButton from "./StartAgainButton";

const Buttons = ({ startAgain, resetResults }) => {
  return (
    <div className="board__buttons">
      <StartAgainButton startAgain={startAgain} />
      <ResetButton resetResults={resetResults} />
    </div>
  );
};

export default Buttons;
