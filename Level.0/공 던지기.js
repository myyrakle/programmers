function solution(numbers, k) {
    let answer = null;
    
    let count = 0;
    let i = -2;
    
    while(true) {
        if(count == k) {
            return numbers[i];
        }
        
        count+=1;
        
        if(i+1 >= numbers.length) {
            i = 0;
        } else {
            i += 1;
        }
        
        if(i+1 >= numbers.length) {
            i = 0;
        } else {
            i += 1;
        }
    }
}
