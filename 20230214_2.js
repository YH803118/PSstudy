// https://school.programmers.co.kr/learn/courses/30/lessons/140108
// 문자열 나누기

function solution(s) {
  var answer = 0;
  var x = "";
  var xcnt = 0;
  var ycnt = 0;
  for (let i = 0; i < s.length; i++) {
    // 기본적으로 카운트를 센다
    if (x == "") {
      x = s[i]; // x 자리가 비어있다면 넣고 시작
      xcnt++; // 카운트도 하나 추가하고
    } else {
      // 비어있지 않다면?
      if (x != s[i]) ycnt++;
      else xcnt++;
      if (xcnt == ycnt) {
        x = "";
        answer++;
        xcnt = 0;
        ycnt = 0;
      }
    }
  }
  if (x) answer++;
  return answer;
}
