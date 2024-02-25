// a만 대문자 나머지는 소문자 
function solution(myString) {
    return  [...myString].map((str) =>{
       return str === "a" || str === "A" ? str.toUpperCase(): str.toLowerCase()
     }).join("")    
 }


 // sol2) 
 function solution(myString) {
    return [...myString].map((letter) => ["a", "A"].includes(letter) ? "A" : letter.toLowerCase()).join("")
 
}

// sol3)     
function solution(myString) {
    return myString.toLowerCase().replaceAll("a", "A")
}