'use strict';

const EMPTY = 0;
const PLAYER_X = 1;
const PLAYER_O = 2;

function checkWin(board, player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
      return true;
    }
  }

  // Check diagonals
  if (
    (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
    (board[0][2] == player && board[1][1] == player && board[2][0] == player)
  ) {
    return true;
  }

  return false;
}

console.log(
  checkWin(
    [
      [PLAYER_X, PLAYER_X, PLAYER_X],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, EMPTY],
      [PLAYER_X, PLAYER_X, PLAYER_X],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [PLAYER_X, PLAYER_X, PLAYER_X],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [PLAYER_X, EMPTY, EMPTY],
      [PLAYER_X, EMPTY, EMPTY],
      [PLAYER_X, EMPTY, EMPTY],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [EMPTY, PLAYER_X, EMPTY],
      [EMPTY, PLAYER_X, EMPTY],
      [EMPTY, PLAYER_X, EMPTY],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, PLAYER_X],
      [EMPTY, EMPTY, PLAYER_X],
      [EMPTY, EMPTY, PLAYER_X],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [PLAYER_X, EMPTY, EMPTY],
      [EMPTY, PLAYER_X, EMPTY],
      [EMPTY, EMPTY, PLAYER_X],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, PLAYER_X],
      [EMPTY, PLAYER_X, EMPTY],
      [PLAYER_X, EMPTY, EMPTY],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [PLAYER_O, PLAYER_O, PLAYER_O],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, EMPTY],
      [PLAYER_O, PLAYER_O, PLAYER_O],
      [EMPTY, EMPTY, EMPTY],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [PLAYER_O, PLAYER_O, PLAYER_O],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [PLAYER_O, EMPTY, EMPTY],
      [PLAYER_O, EMPTY, EMPTY],
      [PLAYER_O, EMPTY, EMPTY],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [EMPTY, PLAYER_O, EMPTY],
      [EMPTY, PLAYER_O, EMPTY],
      [EMPTY, PLAYER_O, EMPTY],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, PLAYER_O],
      [EMPTY, EMPTY, PLAYER_O],
      [EMPTY, EMPTY, PLAYER_O],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [PLAYER_O, EMPTY, EMPTY],
      [EMPTY, PLAYER_O, EMPTY],
      [EMPTY, EMPTY, PLAYER_O],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [EMPTY, EMPTY, PLAYER_O],
      [EMPTY, PLAYER_O, EMPTY],
      [PLAYER_O, EMPTY, EMPTY],
    ],
    PLAYER_O
  )
);

console.log(
  checkWin(
    [
      [PLAYER_X, PLAYER_O, PLAYER_X],
      [PLAYER_X, PLAYER_O, PLAYER_O],
      [PLAYER_O, PLAYER_X, PLAYER_X],
    ],
    PLAYER_X
  )
);

console.log(
  checkWin(
    [
      [PLAYER_X, PLAYER_O, PLAYER_X],
      [PLAYER_X, PLAYER_O, PLAYER_O],
      [PLAYER_O, PLAYER_X, PLAYER_X],
    ],
    PLAYER_O
  )
);
