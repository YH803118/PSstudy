// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  var answer = "";
  survey = survey.map((x) => x.slice(1));
  var count = new Map();
  for (var i = 0; i < choices.length; i++) {
    if (count.get(survey[i])) count.set(survey[i], count.get(survey[i]) + (choices[i] - 4));
    else count.set(survey[i], choices[i] - 4);
    // count.set(survey[i], count.get(survey[i])+(choices[i]-4) || choices[i]-4);
  }
  [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ].forEach((c) => {
    if ((count.get(c[0]) || 0) >= (count.get(c[1]) || 0)) answer += c[0];
    else answer += c[1];
  });
  return answer;
}
