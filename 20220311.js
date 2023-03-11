// https://school.programmers.co.kr/learn/courses/30/lessons/161990
// 바탕화면 정리

function solution(wallpaper) {
  var answer = [-1, -1, 1, -1];
  // (행,렬)
  wallpaper = wallpaper.map((x) => x.split(""));
  for (var i = 0; i < wallpaper[0].length; i++) {
    for (var j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] === "#") {
        if (answer[1] === -1) {
          answer[1] = i; // ldx
          if (answer[3] === -1) answer[3] = i + 1;
        } else answer[3] = i + 1;
        if (answer[0] === -1 || answer[0] > j) {
          answer[0] = j;
          if (answer[2] === 1) answer[2] = j + 1;
        } else if (answer[2] <= j) {
          answer[2] = j + 1; // ldy
        }
      }
    }
  }

  return answer;
}
