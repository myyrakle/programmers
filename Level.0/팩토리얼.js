function factorial(n) {
    if(n <= 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function solution(n) {
    let answer = 1;
    
    while(true) {
        if(factorial(answer+1)>n) {
            return answer;
        }
        
        answer+=1;
    }
    
    return answer;
}
