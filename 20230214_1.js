// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// 가장 가까운 같은 글자
function solution(s) {
  var answer = [-1];
  var ss = [];
  for (let i = 1; i < s.length; i++) {
    if (s.slice(0, i).lastIndexOf(s[i]) < 0) {
      // 앞에 같은 녀석이 없다면 즉시 -1 반환
      answer.push(-1);
      continue;
    }
    // 있다면?
    answer.push(i - s.slice(0, i).lastIndexOf(s[i]));
  }
  return answer;
}
