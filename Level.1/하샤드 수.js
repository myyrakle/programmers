function solution(x) {
    return (x%String(x).split('').reduce((acc, e)=>acc+parseInt(e), 0)) == 0;
}
