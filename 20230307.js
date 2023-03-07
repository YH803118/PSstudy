// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 대충 만든 자판

function solution(keymap, targets) {
  var answer = [];
  keymap = keymap.map((x) => x.split(""));
  targets = targets.map((x) => x.split(""));
  var keyLength = 0;
  keymap.forEach((k) => {
    if (keyLength < k.length) keyLength = k.length;
  });

  for (let i = 0; i < targets.length; i++) {
    var cnt = 0;
    for (let j = 0; j < targets[i].length; j++) {
      var semicnt = 0;
      for (let k = 0; k < keyLength; k++) {
        var c = 0;
        for (let key of keymap) {
          if (key[k] === targets[i][j]) {
            cnt += k + 1;
            semicnt++;
            c = -1;
            break;
          }
        }
        if (c == -1) break;
      }
      if (semicnt == 0) {
        cnt = 0;
        break;
      }
    }
    if (cnt === 0) cnt = -1;
    answer.push(cnt);
  }

  return answer;
}
