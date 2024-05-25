const Field = ({ playerTurn, value, onClick, fieldClass }) => {
  let hoverClass = null;

  if (value == null && playerTurn != null) {
    hoverClass = `board__fields--field__filled-${playerTurn.toLowerCase(
      -1
    )}--hover`;
  }

  return (
    <div
      onClick={onClick}
      className={`board__fields--field ${hoverClass} ${fieldClass}`}
    >
      {value}
    </div>
  );
};

export default Field;
