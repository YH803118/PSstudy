// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  var answer = [];
  // answer : 내가 신고한 ID중 몇이나 정지되었나?
  // 중복신고는 x
  var rep_list = [...new Set(report)].map((x) => x.split(" "));
  var list = [];

  id_list.forEach((id) => {
    if (count(rep_list, id) >= k) list.push(id);
  });

  function count(arr, str) {
    var i = 0;

    for (var a of arr) {
      if (a[1] === str) i++;
    }

    return i;
  }
  id_list.forEach((id) => {
    var i = 0;
    rep_list.forEach((rep) => {
      if (rep[0] === id && list.includes(rep[1])) i++;
    });
    answer.push(i);
  });

  return answer;
}
// 개쩌는 정답

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => a.split(" "));
  // 여기까진 맞는데...
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

// set과 get?

// Map : key와 value로 이루어진 컬렉션.
// key를 이용해 value를 get,set 할 수 있음.
// key는 중복될 수 없음.
/// Map.set(key, value); 를 통해 key,value쌍 추가
/// Map.get(key); 를 통해 value값 리턴.

// Set : value들로 이루어진 컬렉션.
// 같은 밸류를 2번 포함할 수 없음. 이를 통해 배열의 중복을 제거 가능.
