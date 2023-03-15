// https://school.programmers.co.kr/learn/courses/30/lessons/154538#
// 숫자 변환하기 - 미해결(런타임 오류)

function solution(x, y, n) {
  var answer = 9999;
  if (x === y) return 0;
  if (x + n === y) return 1;
  // function calculation(x, a) {
  //     if(answer <= a || a > y) return;
  //     if(x === y){
  //         if(answer > a) answer = a;
  //     } else if (x > y) return;
  //     else {
  //         calculation(x*3, a+1);
  //         calculation(x*2, a+1);
  //         var check1 = y-x;
  //         if(check1 < y/2){
  //             var aa = check1/n;
  //             if(check1%n === 0 && answer > a+aa) answer = a+aa;
  //             return;
  //         } else calculation(x+n, a+1);
  //     }
  // }
  answer = 0;
  var xCheck = x;
  var calc = [0, 1, 2];
  var check = [];
  while (true) {
    var x1 = x + n;
    var x2 = x * 2;
    var x3 = x * 3;
    if (x1 == y || x2 == y || x3 == y) {
      check.push(answer + 1);
      continue;
    }
  }
  console.log(check);
  // calculation(x,0);
  // if(answer === 9999) return -1;
  if (answer === 0) return -1;
  return answer;
}
