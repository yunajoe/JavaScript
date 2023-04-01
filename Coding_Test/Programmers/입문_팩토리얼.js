function solution(n) {
    // factorial 결과값이 n
    let multiply = 1;
    let arr = []
    let answer; 
    for(let i =1; i <=10; i++){
        multiply *= i
        arr.push(multiply)              
    }  
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] <= n){
         answer = i+1
            break
        }          
    }
    return answer
}


// 다른사람풀이  
function solution2(n){
    let ans = 1; 
    for(let i=1; i<=n; i++){
        ans *= i
        if(ans === n){
            return i; 
        }
        if(ans > n){
            return i-1
        }  
    }  
}
