function solution(n) {
    return parseInt(String(n).split('').map(e=>parseInt(e)).sort((l,r)=>r-l).join(''));
}
