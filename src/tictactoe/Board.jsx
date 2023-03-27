import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="w-[500px] h-[500px] gap-[25px] grid grid-cols-3 grid-rows-3">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is_x" : item === "O" ? "is_o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
