// https://school.programmers.co.kr/learn/courses/30/lessons/140107
// 점 찍기

function solution(k, d) {
  var answer = 2 * Math.floor(d / k) + 1; // (0,0)과 0이 포함된 좌표는 미리 포함.
  var dPow = d * d;
  for (var i = k; i < d; i += k) {
    var jPow = dPow - i * i;
    if (jPow >= 1) {
      answer += parseInt(Math.sqrt(jPow) / k);
    }
  }
  return answer;
}
