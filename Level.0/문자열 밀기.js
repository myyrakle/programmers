function solution(A, B) {
    let answer = 0;
    
    for(let i = 0; i<B.length; i++) {
        if(A!=B) {
            let array = A.split('');
            array.unshift(array.pop());
            A = array.join('');
            answer++;
            continue;
        } else {
            break;
        }
    }
    
    if(A!=B){
        answer = -1;
    }
    
    return answer;
}
