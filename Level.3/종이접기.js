function solution(n) {
    if(n==0){
        return [];
    }
    
    const left = solution(n-1);
    const reversed = left.slice().reverse().map(e=>e^1);

    return left.concat([0], reversed);
}
