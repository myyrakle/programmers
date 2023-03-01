function solution(n) {
    var answer = 0;
    return [...Array(n)].reduce((acc, _, i)=>{
        const e = i+1;
        if(e%2==0) {
            return acc+e;
        } else {
            return acc;
        }
    }, 0);
}
