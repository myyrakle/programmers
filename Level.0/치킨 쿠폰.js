function solution(chicken) {
    let answer = 0;
    
    while(true) {
        if(chicken>=10) {
            chicken-=10;
            chicken+=1;
            answer+=1;
        } else {
            break;
        }
    }
    
    return answer;
}
