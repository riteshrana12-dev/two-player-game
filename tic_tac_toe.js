let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll(".change");
let newBtn = document.querySelector("#new_btn");
let resetBtn = document.querySelector("#reset_btn");
let rockPprScissor = document.querySelector("#rock_ppr_scissor");
let win = document.querySelector(".winner");
let grid = document.querySelector(".grid_container");
let play = document.querySelector(".ply_btn");
let winCountO = document.querySelector(".o_win_count");
let winCountX = document.querySelector(".x_win_count");
let winDetail = document.querySelector(".win_detail");
let scoreO = 0;
let scoreX = 0;
let turn = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

play.addEventListener("click", () => {
  grid.style.display = "grid";
  winDetail.style.display = "flex";
  buttons.forEach((btns) => {
    btns.style.display = "block";
  });
  play.style.display = "none";
  rockPprScissor.style.display = "flex";
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "O";
      box.style.color = "#708A58";
      box.style.boxShadow =
        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, " +
        "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
        "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, " +
        "rgba(0, 0, 0, 0.06) 0px 2px 1px inset, " +
        "rgba(0, 0, 0, 0.09) 0px 4px 2px inset, " +
        "rgba(0, 0, 0, 0.09) 0px 8px 4px inset, " +
        "rgba(0, 0, 0, 0.09) 0px 16px 8px inset, " +
        "rgba(0, 0, 0, 0.09) 0px 32px 16px inset";
      turn = false;
    } else {
      box.innerText = "X";
      box.style.color = "#FFB823";
      box.style.boxShadow =
        "rgba(0, 0, 0, 0.17) 0px 0px 25px 0px, " +
        "rgba(0, 0, 0, 0.15) 0px 0px 30px 0px, " +
        "rgba(0, 0, 0, 0.1) 0px 0px 40px 0px, " +
        "rgba(0, 0, 0, 0.06) 0px 0px 1px 0px, " +
        "rgba(0, 0, 0, 0.09) 0px 0px 2px 0px, " +
        "rgba(0, 0, 0, 0.09) 0px 0px 4px 0px, " +
        "rgba(0, 0, 0, 0.09) 0px 0px 8px 0px, " +
        "rgba(0, 0, 0, 0.09) 0px 0px 16px 0px";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newBtn.addEventListener("click", () => {
  winCountO.innerText = "O :";
  scoreO = 0;
  winCountX.innerText = "X :";
  scoreX = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.boxShadow = "";
    win.innerText = "";
  });
  turn = true;
});

resetBtn.addEventListener("click", () => {
  if (scoreO === 4 && scoreX < 4) {
    winCountO.innerText = "O :";
    scoreO = 0;
    winCountX.innerText = "X :";
    scoreX = 0;
  }
  if (scoreX === 4 && scoreO < 4) {
    winCountO.innerText = "O :";
    scoreO = 0;
    winCountX.innerText = "X :";
    scoreX = 0;
  }
  if (scoreO === scoreX && scoreO === 3) {
    winCountO.innerText = "O :";
    scoreO = 0;
    winCountX.innerText = "X :";
    scoreX = 0;
  }
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.boxShadow = "";
    win.innerText = "";
  });
  turn = true;
});

function checkWinner() {
  for (let pattern of winPattern) {
    let [pos1, pos2, pos3] = pattern;
    console.log([pos1, pos2, pos3]);
    let a = boxes[pos1].innerText;
    let b = boxes[pos2].innerText;
    let c = boxes[pos3].innerText;
    if (a != "" && b != "" && c != "" && a === b && b === c) {
      win.innerText = `${a} is winner!`;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      counting(a);
      return;
    }
  }
  if ([...boxes].every((box) => box.innerText !== "")) {
    win.innerText = "Draw!";
    boxes.forEach((box) => (box.disabled = true));
  }
}

function counting(a) {
  if (a === "O") {
    scoreO++;
    winCountO.innerText = `O : ${scoreO}`;
    finalWinner(scoreO, scoreX, a);
  }
  if (a === "X") {
    scoreX++;
    winCountX.innerText = `X : ${scoreX}`;
    finalWinner(scoreO, scoreX, a);
  }
}

function finalWinner(scoreO, scoreX, a) {
  if (scoreO === 4 && scoreX < 4) {
    win.innerText = `🎉 Congratulation ${a} is winner!`;
  } else if (scoreX === 4 && scoreO < 4) {
    win.innerText = `🎉 Congratulation ${a} is winner!`;
  } else if (scoreO === 3 && scoreX === 3) {
    win.innerText = "🤝 It's a draw!";
  }
}
