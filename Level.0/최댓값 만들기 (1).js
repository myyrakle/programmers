function solution(numbers) {
    numbers.sort((l,r)=>r-l);
    return numbers[0] * numbers[1];
}
