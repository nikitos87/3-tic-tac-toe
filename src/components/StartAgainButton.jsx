const StartAgainButton = ({ startAgain }) => {
  return (
    <button onClick={startAgain} className="board__buttons--start-again">
      Start Again
    </button>
  );
};

export default StartAgainButton;
