
function solution(n) {
    var answer = [];
    for(let i=1; i<= (n/2) + 1; i++){
        if(n % i === 0){
            answer.push(i)
        }
    }
    answer.splice(answer.length, 0, n)
    return answer   
}