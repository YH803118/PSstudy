// https://school.programmers.co.kr/learn/courses/30/lessons/150369#

function solution(cap, n, deliveries, pickups) {
  let d_count = 0; // 트럭에 담긴 상자
  let d_arr = [];
  let p_arr = [];
  let p_count = 0;
  let test = 0;
  let f = n - 1;

  let i = f;
  for (let j = 0; j <= n * n; j++) {
    if (i < 0) {
      console.log("종료");
      break;
    }
    if (deliveries[i] > 0) {
      if (d_count == 0) {
        d_arr.push(i + 1);
      }
      if (deliveries[i] < cap - d_count) {
        d_count += deliveries[i];
        deliveries[i] = 0;
      } else {
        deliveries[i] = deliveries[i] - cap + d_count;
        d_count = 0;
      }
    }
    if (pickups[i] > 0) {
      if (p_count == 0) {
        p_arr.push(i + 1);
      }
      if (pickups[i] < cap - p_count) {
        p_count += pickups[i];
        pickups[i] = 0;
      } else {
        pickups[i] = pickups[i] - cap + p_count;
        p_count = 0;
      }
    }
    if (deliveries[i] == 0 && pickups[i] == 0) {
      i--;
    }
  }

  var len = 0;
  while (d_arr[len] || p_arr[len]) {
    if (d_arr[len] >= p_arr[len]) {
      test += d_arr[len];
    } else test += p_arr[len] || d_arr[len];
    len++;
  }

  return test * 2;
}
