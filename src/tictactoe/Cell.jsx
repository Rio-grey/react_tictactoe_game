import React from "react";

// props là 1 cái object, trong cái object đấy có 2 cái property là value và onClick, onClick sẽ trả về 1 cái gì đó
// const props = {
//   value: "X",
//   onClick: () => true
// }

const Cell = ({ value, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`flex text-[100px] items-center justify-center font-bold shadow-xl transition-all cursor-pointer ${className} game-cell `}
    >
      {value}
    </div>
  );
};

export default Cell;
