function solution(num_list, n) {
    const answer = [[]];
    
    for(const e of num_list) {
        if(answer[answer.length-1].length == n) {
            answer.push([]);
        }
        
        answer[answer.length-1].push(e);
    }
    
    return answer;
}
