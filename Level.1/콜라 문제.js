function recursive(a, b, n) {
    if(a>n) {
        return 0;
    }
    
    let received = Math.floor(n / a) * b;
    n %= a; 
    
    return solution(a, b, n + received) + received;
}

function solution(a, b, n) {
    return recursive(a, b, n);
}
