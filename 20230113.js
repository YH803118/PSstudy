// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  var answer = 0;
  var check = 0;
  const length = ingredient.length;

  let table = [ingredient[0], ingredient[1], ingredient[2]];
  for (let i = 3; i < length; ) {
    table.push(ingredient[i]);
    let d = i - answer * 4;
    if (table[d] === 1 && table[d - 1] === 3 && table[d - 2] === 2 && table[d - 3] === 1) {
      table.splice(d - 3, 4);
      answer++;
    }
    i++;
  }

  return answer;
}

// 너무어렵게 풀었다.
