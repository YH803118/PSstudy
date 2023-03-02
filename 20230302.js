// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색
// 정확성 클리어 / 효율성 x
function solution(info, query) {
  var answer = [];
  var infoSpl = info.map((x) => x.split(" "));
  infoSpl = infoSpl.sort((a, b) => {
    return b[4] - a[4];
  });
  var test = infoSpl.map((x) => x[4]);
  var querySpl = query.map((x) => x.split(/ and | /));

  for (var q of querySpl) {
    var ans = 0;
    for (var i of infoSpl) {
      var score = 0;
      if (Number(q[4]) > i[4]) break;
      for (var j = 0; j <= 3; j++) {
        if (q[j] === "-") {
          score++;
        } else if (q[j] !== i[j]) {
          break;
        } else score++;
      }
      if (score === 4) ans++;
    }
    answer.push(ans);
  }
  return answer;
}
