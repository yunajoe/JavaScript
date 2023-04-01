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
