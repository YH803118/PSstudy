// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색
// 정확성 클리어 / 효율성 x
function binarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid;
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (Number(target) > arr[mid][4]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

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
    var search = binarySearch(infoSpl, q[4]);
    for (let i = 0; i <= search; i++) {
      for (var j = 0; j <= 3; j++) {
        if (q[j] !== "-" && q[j] !== infoSpl[i][j]) break;
        else if (j === 3) ans++;
      }
    }
    answer.push(ans);
  }
  return answer;
}
