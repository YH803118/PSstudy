// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  moves = moves.map((x) => x - 1);
  var storage = [];
  var log = board.map((x) => 0);

  for (var move of moves) {
    for (var i = log[move]; i < board.length; i++) {
      var item = board[i][move];
      if (item > 0) {
        if (storage[storage.length - 1] === item) {
          storage.pop();
          answer++;
        } else storage.push(item);
        log[move] = i + 1;
        break;
      }
    }
  }

  return answer * 2;
}
