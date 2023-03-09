// https://school.programmers.co.kr/learn/courses/30/lessons/42862#
// 체육복 (탐욕법?)

function solution(n, lost, reserve) {
  var answer = 0;
  lost = lost.sort();
  reserve = reserve.sort();
  reserve = reserve.filter((r) => {
    if (lost.includes(r)) {
      lost = lost.filter((x) => x != r);
    } else return r;
  });
  lost.forEach((x) => {
    n--;
    let res = 0;
    for (let r of reserve) {
      if (x + 1 == r || x - 1 == r) {
        res = r;
        n++;
        break;
      }
    }
    reserve = reserve.filter((x) => x != res);
  });

  answer = n;
  return answer;
}
