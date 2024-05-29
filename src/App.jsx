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

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default App;
