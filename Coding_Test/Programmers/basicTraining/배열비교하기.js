/*
// 2차계산 
arr1 < arr2   >>> return -1 
arr1 > arr2   >>> return 1 
arr1 === arr2 >>> return 0  
크다 작다 기준? array의 길이를 기준으로 한다   
// 1차 계산 
array길이가 다르다면은 array.length가 긴쪽
array길이가 같다면은  array원소의 합을 비교해서 다르다면 큰쪽이 크고   
*/

function compareSum(arr1, arr2){
    const sum1 = arr1.reduce((acc, curvalue) =>{
        return acc += curvalue
    })
    const sum2 = arr2.reduce((acc, curvalue) =>{
        return acc += curvalue 
    })        
    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1      
}   
function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1
    }else{
        return compareSum(arr1, arr2)
    }
}