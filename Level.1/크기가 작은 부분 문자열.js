function solution(t, p) {
    const len = p.length;
    
    let answer = 0;
    
    for(let i = 0; i+len <= t.length; i++) {
        let sub = Number(t.slice(i, i+len));
        if(sub<=Number(p)) {
            answer+=1;
        }
    }
    
    return answer;
}
