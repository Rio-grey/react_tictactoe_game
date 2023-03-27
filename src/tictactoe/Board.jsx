import React from "react";
import Cell from "./Cell";
import { calculateWinnerStyle } from "./WinnerRules";

const Board = (props) => {
  const winner = calculateWinnerStyle(props.cells);
  return (
    <div className="w-[500px] h-[500px] gap-[25px] grid grid-cols-3 grid-rows-3">
      {props.cells.map((item, index) => {
        const winnerStyle =
          winner && winner.includes(index) ? "animate-bounce" : "";
        const cellStyle = item === "X" ? "is_x" : item === "O" ? "is_o" : "";
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={`${cellStyle} ${winnerStyle}`}
          ></Cell>
        );
      })}
    </div>
  );
};

export default Board;
