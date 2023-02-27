function solution(num, k) {
    let answer = String(num).split('').findIndex(e=>Number(e)==k);
    
    if(answer!=-1) {
        answer += 1;
    }
    
    return answer;
}
