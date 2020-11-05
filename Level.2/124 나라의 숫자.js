function solution(n) {
    let numbers = ['4', '1', '2'];
    let answer = '';
    
    while (n) {
        answer = numbers[n%3] + answer;
        n = Math.floor(n/3) - (n%3 == 0);
    }
    
    return answer;
}
