// https://school.programmers.co.kr/learn/courses/30/lessons/147354#
// 테이블 해시 함수
// 최대 기록 26ms
function bit(a) {
  if (a <= 1) return a;
  var aBit = [];
  while (true) {
    if (a == 1) {
      aBit.push(1);
      break;
    }
    aBit.push(a % 2);
    a = Math.floor(a / 2);
  }
  return aBit;
}

function solution(data, col, row_begin, row_end) {
  var answer = 0;

  function hash(col, row_begin, row_end) {
    data = data.sort((a, b) => {
      if (a[col] === b[col]) return b[0] - a[0];
      return a[col] - b[col];
    });
    var S = -1;
    for (var i = row_begin; i <= row_end; i++) {
      var S_i = 0;
      for (var d of data[i]) {
        S_i += d % (i + 1);
      }
      if (S >= 0 && S !== S_i) {
        var bitS = bit(S);
        var bitS_i = bit(S_i);
        var forLength = bitS_i.length;
        if (bitS.length >= bitS_i.length) forLength = bitS.length;

        var check = [];
        for (var b = 0; b < forLength; b++) {
          if (!bitS[b]) {
            check.push(bitS_i[b]);
          } else if (!bitS_i[b]) {
            check.push(bitS[b]);
          } else if (bitS[b] != bitS_i[b]) check.push(1);
          else check.push(0);
        }
        S = 0;
        for (var c = 0; c < check.length; c++) {
          if (check[c] === 1) S += 2 ** c;
        }
      } else S = S_i;
    }
    return S;
  }
  answer = hash(col - 1, row_begin - 1, row_end - 1);

  return answer;
}
