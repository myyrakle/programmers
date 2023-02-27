function solution(num, total) {
    let answer = [];
    
    if(num%2 == 0) {
        const average = Math.floor(total / num);
        
        const halfLength = Math.floor(num/2);
        const centerIndex = halfLength - 1;
        
        answer = [...Array(num)].map((e, i)=>{
            return average + (i-centerIndex);
        });
    } else {
        const average = Math.floor(total / num);
        
        const halfLength = Math.floor(num/2);
        const centerIndex = halfLength;
        
        answer = [...Array(num)].map((e, i)=>{
            return average + (i-centerIndex);
        });
    }
    
    return answer;
}
