function solution(n) {
    return String(n).split('').reduce((acc, e)=>acc+parseInt(e), 0);
}
