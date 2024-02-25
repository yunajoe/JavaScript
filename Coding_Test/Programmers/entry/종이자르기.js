function solution(M, N) {
   let answer;
   if(M === 1 && N ===1){
       answer = 0    
   }
   else if(M ===1 && N !==1){
       answer = N - 1         
   }else if(N ===1 && M !==1){
       answer = M - 1
   }else{
       let M_Count = M -1
       let N_Count = (N -1) * M
       answer = M_Count + N_Count
   }
    return answer     
}