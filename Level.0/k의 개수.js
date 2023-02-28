function solution(i, j, k) {
    return [...Array(j-i+1)].reduce((acc, _, index)=>{
        return acc + (String(index+i).match(new RegExp(k, 'g'))?.length ?? 0);
    }, 0);
}
