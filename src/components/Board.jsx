import Squares from "./Squares";
import Statu from "./Statu";
import ResetButoon from "./RestBoardButton";
import HistoCompo from "./HistoCompo";
import { useEffect, useState } from "react";

function ckeckGameEnd(squaresState) {
  if (checkWinner(squaresState) || SquaresFull(squaresState)) {
    return true;
  }
}

function SquaresFull(squaresState) {
  for (let i = 0; i < squaresState.length; i++) {
    const e = squaresState[i];
    if (e == null) {
      return false;
    }
  }
  return true;
}

function checkSquare(squaresState, id) {
  return squaresState[id] ? false : true;
}
function checkWinner(squaresState) {
  if (
    (squaresState[0] === squaresState[3] &&
      squaresState[3] === squaresState[6] &&
      squaresState[6] !== null) ||
    (squaresState[6] === squaresState[7] &&
      squaresState[7] === squaresState[8] &&
      squaresState[8] !== null) ||
    (squaresState[2] === squaresState[5] &&
      squaresState[5] === squaresState[8] &&
      squaresState[8] !== null) ||
    (squaresState[0] === squaresState[1] &&
      squaresState[1] === squaresState[2] &&
      squaresState[2] !== null) ||
    (squaresState[0] === squaresState[4] &&
      squaresState[4] === squaresState[8] &&
      squaresState[4] !== null) ||
    (squaresState[2] === squaresState[4] &&
      squaresState[4] === squaresState[6] &&
      squaresState[6] !== null) ||
    (squaresState[3] === squaresState[4] &&
      squaresState[4] === squaresState[5] &&
      squaresState[5] !== null) ||
    (squaresState[1] === squaresState[4] &&
      squaresState[4] === squaresState[7] &&
      squaresState[7] !== null)
  ) {
    return true;
  }
  return false;
}

function Board() {
  const [squaresState, setSquaresState] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("squares")) || Array(9).fill(null)
    );
  });
  const [xOrO, setXOrO] = useState("X");
  const [gameStatus, setGameStatus] = useState(Array(2).fill(null));

  useEffect(() => {
    window.localStorage.setItem("squares", JSON.stringify(squaresState));
  });

  function resetB() {
    setSquaresState(Array(9).fill(null));
    setXOrO("X");
  }

  function handleSquareClick(id) {
    if (!checkWinner(squaresState)) {
      if (checkSquare(squaresState, id)) {
        setSquaresState((prev) => prev.map((e, i) => (i === id ? xOrO : e)));
        setXOrO((e) => (e === "X" ? "O" : "X"));
      }
    }
  }
  // "turn of : " + xOrO

  return (
    <div className="cont">
      <div>
        <Statu
          status={
            checkWinner(squaresState)
              ? "winer is : " + (xOrO == "X" ? "O" : "X")
              : SquaresFull(squaresState)
              ? "game is draw"
              : "turn of : " + xOrO
          }
        ></Statu>
        <div className="board">
          {squaresState.map((e, i) => (
            <Squares
              key={i}
              squareId={i}
              squareValue={e}
              handleSquareClick={handleSquareClick}
            />
          ))}
        </div>
        {ckeckGameEnd(squaresState) ? (
          <ResetButoon
            resetButton={resetB}
            buttonStatu={"click me to replay"}
          ></ResetButoon>
        ) : null}
      </div>
      <div>
        <HistoCompo histoKey={1} histoState={"heyyy"}></HistoCompo>

      </div>
    </div>
  );
}

export default Board;
