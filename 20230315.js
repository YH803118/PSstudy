// https://school.programmers.co.kr/learn/courses/30/lessons/154538#
// 숫자 변환하기 - 미해결(런타임 오류)
// 재귀함수 사용 > 반복문으로 변경 - 해결

function solution(x, y, n) {
  if (x === y) return 0;
  if (x + n === y) return 1;
  var answer = 0;
  var mate = {};
  mate[x] = 0;
  var graph = [x];

  for (var i = 0; i <= y / n; i++) {
    var node = [];
    answer++;
    for (var g of graph) {
      for (var nd of [g * 3, g * 2, g + n]) {
        if (nd <= y) {
          if (mate[nd] || mate[nd] >= mate[g] + 1) continue;
          mate[nd] = mate[g] + 1;
          node.push(nd);
        }
        if (mate[y]) return mate[y];
      }
    }
    graph = node;
  }
  return -1;
}
