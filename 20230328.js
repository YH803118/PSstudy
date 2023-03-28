// https://school.programmers.co.kr/learn/courses/30/lessons/148653#
// 마법의 엘리베이터

function solution(storey) {
  var answer = 0;
  var i = 1;
  while (storey > 0) {
    var check = storey % 10;
    if (storey % 100 <= 50) {
      if (check <= 5) answer += check;
      else {
        answer += 10 - check;
        storey += 10;
      }
    } else {
      if (check < 5) answer += check;
      else {
        answer += 10 - check;
        storey += 10;
      }
    }
    storey = Math.floor(storey / 10);
    i++;
  }

  return answer;
}
