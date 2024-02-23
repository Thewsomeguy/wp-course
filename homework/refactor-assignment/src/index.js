'use strict';

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
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  checkWin(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    1
  )
);

console.log(
  checkWin(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    2
  )
);
