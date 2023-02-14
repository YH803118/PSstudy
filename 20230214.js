// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// 크기가 작은 부분문자열
function solution(t, p) {
  var answer = 0;

  var plen = p.length;

  for (let i = 0; i <= t.length - plen; i++) {
    var tsli = t.slice(i, i + plen);
    if (tsli <= p) answer++;
  }

  return answer;
}
