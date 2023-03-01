import "./../boardStyling.css";


function Squares({squareId,handleSquareClick,squareValue}) {
  
  return <button className="scquare" id={squareId} onClick={()=>handleSquareClick(squareId)}>{squareValue}</button>;
}
export default Squares;
