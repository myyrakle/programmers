function commonDivisor(n) {
    const list = [];
    
    for(let i = 1; i<=n; i++) {
        if(n%i==0) {
            list.push(i);
        }
    }
    
    return list;
}

function solution(n) {
    let answer = 0;
    
    for(let i = 4; i<=n; i++) {
        if(commonDivisor(i).length>=3) {
            answer+=1;
        }
    }
    
    return answer;
}
