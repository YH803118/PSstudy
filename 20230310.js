// https://school.programmers.co.kr/learn/courses/30/lessons/150368
// 이모티콘 할인행사

function solution(users, emoticons) {
  var answer = [0, 0];
  var discount = [10, 20, 30, 40];

  function emoticonDiscount(users, emoticons, dis) {
    var answerCheck = [0, 0];
    users.forEach((user) => {
      var cell = 0;
      for (let i = 0; i < emoticons.length; i++) {
        let check = (emoticons[i] * (100 - dis[i])) / 100;

        if (dis[i] >= user[0]) {
          // 만족스런 할인율이면?
          if (check + cell < user[1]) {
            // 플러스에 가입하지않고 그냥 살만하다
            cell += check;
          } else if (check + cell >= user[1]) {
            // 아니다 플러스 하자
            cell = 0;
            answerCheck[0] += 1;
            break;
          }
        }
      }
      answerCheck[1] += cell;
    });
    if (answerCheck[0] > answer[0]) answer = answerCheck;
    else if (answerCheck[0] === answer[0] && answerCheck[1] > answer[1]) answer = answerCheck;
  }

  function getCombine(arr, num) {
    var results = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
      const combinations = getCombine(origin, num - 1);
      const attached = combinations.map((v) => [fixed, ...v]);
      results.push(...attached);
    });
    return results;
  }
  for (var dis of getCombine(discount, emoticons.length)) {
    emoticonDiscount(users, emoticons, dis);
  }
  // console.log(answers)
  return answer;
}
