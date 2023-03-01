// https://school.programmers.co.kr/learn/courses/30/lessons/72410
// 신규 아이디 추천

function solution(new_id) {
  var answer = "";
  // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자
  // 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

  // 65-90 : 대문자
  // 45,46,95 : - . _
  for (let i = 0; i < new_id.length; i++) {
    // 1단계
    var asci = new_id.charCodeAt(i);
    if (asci >= 65 && asci <= 90) {
      answer += String.fromCharCode(asci + 32);
      // 2단계
    } else if ([45, 46, 95].includes(asci) || (asci >= 97 && asci <= 122) || (asci >= 48 && asci <= 57)) {
      // 3단계 - 내 앞이 .이고 내가 .이면 삽입x
      if (!(answer.slice(-1) == new_id[i] && asci == 46)) {
        answer += new_id[i];
      }
    }
  }
  // 4단계
  while (true) {
    if (answer.slice(0, 1) != "." && answer.slice(-1) != ".") break;
    if (answer.slice(0, 1) == ".") answer = answer.slice(1);
    if (answer.slice(-1) == ".") answer = answer.slice(0, -1);
  }
  // 5단계
  if (answer == "") answer = "a";
  // 6단계
  if (answer.length >= 16) answer = answer.slice(0, 15);
  // 7단계
  else if (answer.length <= 2) {
    for (let i = answer.length; i < 3; i++) {
      answer += answer[i - 1];
    }
  }
  while (true) {
    if (answer.slice(0, 1) != "." && answer.slice(-1) != ".") break;
    if (answer.slice(0, 1) == ".") answer = answer.slice(1);
    if (answer.slice(-1) == ".") answer = answer.slice(0, -1);
  }
  return answer;
}
