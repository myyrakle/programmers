function solution(numbers) {
    return numbers.reduce((acc,e)=>acc+e, 0) / numbers.length;
}
