function solution(hp) {
    let answer = 0;
    
    answer += Math.floor(hp/5);
    hp %= 5;
    
    answer += Math.floor(hp/3);
    hp %= 3;
    
    answer += Math.floor(hp/1);
    hp %= 1;
    
    return answer;
}
