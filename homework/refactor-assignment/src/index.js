'use strict';

function checkWin(board, player) {
  if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
    return true;
  }

  if (board[1][0] == player && board[1][1] == player && board[1][2] == player) {
    return true;
  }

  if (board[2][0] == player && board[2][1] == player && board[2][2] == player) {
    return true;
  }

  if (board[0][0] == player && board[1][0] == player && board[2][0] == player) {
    return true;
  }

  if (board[0][1] == player && board[1][1] == player && board[2][1] == player) {
    return true;
  }

  if (board[0][2] == player && board[1][2] == player && board[2][2] == player) {
    return true;
  }

  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    return true;
  }

  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
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
