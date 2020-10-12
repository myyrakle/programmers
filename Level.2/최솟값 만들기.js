function solution(A,B){
    const sortedA = A.sort((l, r)=>l-r);
    const sortedB = B.sort((l, r)=>r-l);

    return sortedA.map((e, i)=>e*sortedB[i]).reduce((acc, e)=>acc+e, 0);
}
