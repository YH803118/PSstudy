// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// 둘만의 암호

function solution(s, skip, index) {
  var answer = "";

  // 97 ~ 122
  var sk = [];
  for (let j = 0; j < skip.length; j++) {
    sk.push(skip.charCodeAt(j));
  }
  sk = sk.sort(function (a, b) {
    return a - b;
  });
  if (index + sk.length > 26) index = index - (26 - sk.length);
  for (let i = 0; i < s.length; i++) {
    var sr = s.charCodeAt(i);
    var cnt = 0;
    var first = sk.filter((x) => x > sr);
    var second = sk.filter((x) => x < sr);

    for (let j = 0; j < first.length; j++) {
      if (first[j] <= sr + index + cnt) cnt++;
    }
    for (let j = 0; j < second.length; j++) {
      if (second[j] + 26 <= sr + index + cnt) cnt++;
    }
    var test = sr + index + cnt;
    if (test > 122) {
      test -= 26;
    }
    answer += String.fromCharCode(test);
  }

  return answer;
}
