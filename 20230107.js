// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  var answer = [];
  todaySplit = today.split(".");
  todayData = (todaySplit[0] - 2000) * 12 * 28 + todaySplit[1] * 28 + Number(todaySplit[2]);
  var month = 0;
  var i = 1;
  for (var pri of privacies) {
    var priv = pri.split(" ");
    for (var t of terms) {
      if (priv[1] === t.split(" ")[0]) {
        month = t.split(" ")[1];
        break;
      }
    }
    dateSplit = priv[0].split(".");
    dateData = (dateSplit[0] - 2000) * 12 * 28 + dateSplit[1] * 28 + Number(dateSplit[2]);
    if (todayData - dateData >= month * 28) answer.push(i);
    i++;
  }
  return answer;
}

// 공부할 것 - forEach, Map, reduce
