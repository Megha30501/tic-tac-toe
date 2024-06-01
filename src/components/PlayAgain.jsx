function PlayAgain ({setHistory, setCurrentMove}){
    const handlePlayAgain =()=> {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }
    return(
        <button className="playagain"  onClick={handlePlayAgain}>Play Again ?</button>
    );
}

export default PlayAgain;