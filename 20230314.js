// https://school.programmers.co.kr/learn/courses/30/lessons/159994#
// 카드 뭉치

function solution(cards1, cards2, goal) {
  var answer = "Yes";
  var cnt = 0;
  var cnt1 = 0;
  var cnt2 = 0;

  for (var g of goal) {
    var check = -1;

    if (g === cards1[cnt1]) {
      cnt1++;
      check = 1;
    } else if (g === cards2[cnt2]) {
      cnt2++;
      check = 1;
    }
    if (check < 0) {
      answer = "No";
      break;
    } else answer = "Yes";
  }
  return answer;
}
