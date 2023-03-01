function commonDivisor(n) {
    const list = [];
    
    for(let i = 1; i<=n; i++) {
        if(n%i==0) {
            list.push(i);
        }
    }
    
    return list;
}

function solution(left, right) {
    let answer = 0;
    
    while(left<=right) {
        if(commonDivisor(left).length%2==0) {
            answer += left;
        } else { 
            answer -= left;
        }
        left+=1;
    }
    
    return answer;
}
