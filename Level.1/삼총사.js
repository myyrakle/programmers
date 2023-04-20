function solution(number) {
    let answer = 0;
    
    for(let i = 0; i < number.length; i++) {
        for(let j = i+1; j < number.length; j++) {
            if(i==j) {
                continue;
            }
            
            for(let k = j+1; k < number.length; k++) {
                if(i==k || j==k) {
                    continue;
                }
                
                if( (number[i] + number[j] + number[k]) === 0) {
                    answer+=1;
                }
            }
        }
    }
    
    return answer;
}
