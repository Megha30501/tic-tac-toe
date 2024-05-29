import { useState } from "react";

function Button({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Button value={squares[0]} onSquareClick={handleClick} />
        <Button value={squares[1]} onSquareClick={handleClick} />
        <Button value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Button value={squares[3]} onSquareClick={handleClick} />
        <Button value={squares[4]} onSquareClick={handleClick} />
        <Button value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Button value={squares[6]} onSquareClick={handleClick} />
        <Button value={squares[7]} onSquareClick={handleClick} />
        <Button value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
};

export default App;
