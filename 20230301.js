// https://school.programmers.co.kr/learn/courses/30/lessons/135807
// 숫자 카드 나누기
function solution(arrayA, arrayB) {
  var answerA = 0;
  var answerB = 0;
  function arrMap(arrA, arrB) {
    var test = [];
    var test2 = [];
    arrA.forEach((a) => {
      var cas = [0];
      if (test.length === 0) {
        for (let i = 2; i <= a; i++) {
          if (a % i === 0) cas.push(i);
        }
      } else {
        test.forEach((x) => {
          if (a % x === 0) cas.push(x);
        });
      }
      if (test.length === 0) test = cas;
      else {
        test = test.filter((x) => cas.includes(x));
      }
    });
    arrB.forEach((a) => {
      if (test2.length === 0) test2 = test.filter((b) => a % b > 0);
      else test2 = test2.filter((b) => a % b > 0);
      if (test2.length === 0) test2.push(0);
    });
    return test2;
  }
  var arrA = arrMap(arrayA, arrayB);
  var arrB = arrMap(arrayB, arrayA);
  answerA = arrA[arrA.length - 1];
  answerB = arrB[arrB.length - 1];
  if (answerA >= answerB) return answerA;
  else return answerB;
}
