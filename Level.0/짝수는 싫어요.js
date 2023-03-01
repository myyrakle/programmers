function solution(n) {
    return [...Array(n)].map((_,i)=>i+1).filter(e=>e%2==1);
}
