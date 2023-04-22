function solution(s) {
    const map = {};
    
    const chars = s.split('');

    const answer = [];
    
    for(let i = 0; i < chars.length; i++) {
        const c = chars[i];
        
        if(map[c] !== undefined) {
            answer.push(i-map[c]);
        } 
        else {
            answer.push(-1);
        }
        
        map[c] = i;
    }
    
    return answer;
}
