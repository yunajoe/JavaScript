// intervals 안에있는 배열들(2개)의 index 범위만큼 잘라서 새로운 배열을 각각 만든다
// 새로운 array를 concat시킨다 
function solution(arr, intervals) {  
    const [index1, index2] = [...intervals] // [[1,3],[0,4]]
    const [start, end] = index1
    const [start2, end2] = index2
    const arr1 = arr.slice(start, end+1)
    const arr2 = arr.slice(start2, end2+1)
    return arr1.concat(arr2)
}


//sol2) 
function solution(arr, intervals) {
    const [[a,b], [c,d]] = intervals      
    return [...arr.slice(a,b+1), ...arr.slice(c, d+1)]
}

//sol3)    
function solution(arr, intervals) {
    let arr1 = [];
    let arr2 = [];
    for(let i=intervals[0][0]; i<=intervals[0][1]; i++){
        arr1.push(arr[i]);
    }
    for(let i=intervals[1][0]; i<=intervals[1][1]; i++){
        arr2.push(arr[i]);
    }
    return arr1.concat(arr2);
}

// sol4)   
function solution(arr, intervals) {
    let newIntervals = []
   intervals.map((idx) =>{
       for(let i= idx[0]; i <= idx[1]; i++){
           newIntervals.push(arr[i]) 
       }
   })      
    return newIntervals
}