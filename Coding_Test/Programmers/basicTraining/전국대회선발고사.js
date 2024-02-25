// 참여가 가능한 학생 중 등수가 높은 3명
// 각 학생들의 선발 고사 등수를 담은 정수 배열 rank
// 전국 대회 참여 가능 여부 boolean 배열 attendance가 매개변수로 주어집니다
// attendance가 true 인 값 >> 7,2,5,4을 index와 함께 fetch하다
// index가 번호!
// 1번은 7등 2번은 2등 3번은 5등 4번이 4등
// 인덱스가 높은 순위대로 2번, 4번, 3번
// 10000 x 2 + 100 x 4 + 3
// 6, 5, 4
// 4등은 5번, 5등은 2번 6등은 0번
// attendance 가 3개일때와 3개 보다 많을때를 나뉜다
// 3개일때는 따로 true false 확인을 할 필요가 없고 3개보다 많을때는 true false를 구별해야 한다
// 그런다음 rank를 key로 하고 인덱스(선수번호)를 value로 하는  obj를 만든다
// const obj = {1:0, 2:1, 3:2}
// obj 를 key를 중심으로 하는 오름차순으로 정렬
// // 10000 × a + 100 × b + c(a,b,c는 value)
//ㄱ무ㅏ
const makeObj = (rank) => {
  return rank.reduce((result, num, idx) => {
    result[num] = idx;
    return result;
  }, {});
};

function solution(rank, attendance) {
  // const [a, b, c] = Object.values(makeObj(rank))
  // return 10000 * a + 100 * b + c
  if (attendance.length === 3) {
    const [a, b, c] = Object.values(makeObj(rank));
    return 10000 * a + 100 * b + c;
  }
  const obj = attendance
    .map((num, idx) => {
      return num === true ? idx : -1;
    })
    .filter((index) => index !== -1)
    .reduce((result, index) => {
      result[rank[index]] = index;
      return result;
    }, {});
  const [a, b, c] = Object.values(obj);
  return 10000 * a + 100 * b + c;
}
