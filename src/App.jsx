function Button(props) {
  function handleClick() {
    console.log(` ${props.value} clicked`);
  }
  return (
    <button className="square" onClick={handleClick}>
      {" "}
      {props.value}{" "}
    </button>
  );
}

const App = () => {
  return (
    <>
      <div className="board-row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
      </div>
      <div className="board-row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
      </div>
      <div className="board-row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
      </div>
    </>
  );
};

export default App;
