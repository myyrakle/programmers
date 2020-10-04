function solution(numbers) {
    return numbers.map(e=>String(e)).sort().reverse().reduce((acc, e)=>acc+e, '');
}
