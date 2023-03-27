import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "./WinnerRules";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    // Tạo một bản sao của mảng history và chỉ lấy từ phần tử đầu đến phần tử được chỉ định bằng biến stepNumber và lưu vào biến newHistory.
    const newHistory = history.slice(0, stepNumber + 1);
    // Lấy phần tử cuối cùng của newHistory và lưu vào biến current.
    const current = newHistory[newHistory.length - 1];
    // Tạo một bản sao của current và lưu vào biến boardCopy.
    const boardCopy = [...current];

    // Nếu winner đã được xác định hoặc ô tương ứng đã được chọn trước đó, hàm sẽ kết thúc.
    if (winner || board[index]) return;

    // Ngược lại, giá trị của ô tương ứng sẽ được cập nhật với giá trị X hoặc O tùy thuộc vào giá trị củ
    boardCopy[index] = xIsNext ? "X" : "O";

    setHistory([...newHistory, boardCopy]);
    setStepNumber(newHistory.length);
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);

    // Set a timeout to automatically make a random move after 3 seconds
    // setTimeout(() => {
    //   if (xIsNext) {
    //     const emptyCells = boardCopy.reduce((acc, cell, i) => {
    //       if (!cell) acc.push(i);
    //       return acc;
    //     }, []);
    //     const randomIndex =
    //       emptyCells[Math.floor(Math.random() * emptyCells.length)];
    //     boardCopy[randomIndex] = "O";
    //     setHistory([...newHistory, boardCopy]);
    //     setStepNumber(newHistory.length + 1);
    //     setBoard(boardCopy);
    //     setXIsNext(true);
    //   }
    // }, 1000);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
  };

  const handleUndo = () => {
    if (stepNumber > 0) {
      const newStep = stepNumber - 1;
      const prevBoard = history[newStep];
      setStepNumber(newStep);
      setBoard(prevBoard);
      setXIsNext(newStep % 2 === 0);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="font-bold text-center title mb-7 text-7xl">Tic tac toe</h1>
      <div className="flex items-center justify-center mb-20">
        <Board cells={board} onClick={handleClick}></Board>
      </div>
      {winner && (
        <div className="mb-10 text-3xl font-bold text-center winner">
          Winner is {winner}
        </div>
      )}
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="px-4 py-4 text-xl font-medium text-white shadow-lg rounded-xl bg-cyan-500 shadow-cyan-500/50"
          onClick={handleResetGame}
        >
          Reset game
        </button>
        <button
          className="px-4 py-4 text-xl font-medium text-white shadow-lg rounded-xl bg-green-500 shadow-green-500/50 min-w-[135px]"
          onClick={handleUndo}
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default Game;
