function solution(clothes) {
    const map = {};
    
    clothes.forEach(e=>map[e[1]] ? map[e[1]]++ : map[e[1]]=1);
    
    return Object.values(map).reduce((acc, e)=>acc*(e+1), 1) - 1;
}
