import Field from "./Field";
import Strike from "./Strike";

const Fields = ({
  playerTurn,
  fields,
  onFieldClick,
  fieldClasses,
  strikeClass,
}) => {
  return (
    <div className="board__fields">
      <Field
        playerTurn={playerTurn}
        value={fields[0]}
        fieldClass={fieldClasses[0]}
        onClick={() => onFieldClick(0)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[1]}
        fieldClass={fieldClasses[1]}
        onClick={() => onFieldClick(1)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[2]}
        fieldClass={fieldClasses[2]}
        onClick={() => onFieldClick(2)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[3]}
        fieldClass={fieldClasses[3]}
        onClick={() => onFieldClick(3)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[4]}
        fieldClass={fieldClasses[4]}
        onClick={() => onFieldClick(4)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[5]}
        fieldClass={fieldClasses[5]}
        onClick={() => onFieldClick(5)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[6]}
        fieldClass={fieldClasses[6]}
        onClick={() => onFieldClick(6)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[7]}
        fieldClass={fieldClasses[7]}
        onClick={() => onFieldClick(7)}
      />
      <Field
        playerTurn={playerTurn}
        value={fields[8]}
        fieldClass={fieldClasses[8]}
        onClick={() => onFieldClick(8)}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Fields;
