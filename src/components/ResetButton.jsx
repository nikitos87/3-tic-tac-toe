const ResetButton = ({ resetResults }) => {
  return (
    <button onClick={resetResults} className="board__buttons--reset-results">
      Reset Results
    </button>
  );
};

export default ResetButton;
