function solution(absolutes, signs) {
    return absolutes.reduce((acc, e, i)=>{
        if(signs[i]) {
            return acc + e;
        } else {
            return acc + -e;
        }
    }, 0);
}
