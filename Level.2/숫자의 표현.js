function solution(n) {
    let count = 0;
    
    let array = [...Array(n)].map((_, i)=>i+1);
    
    for(let i = 0; i<array.length; i++){
        let sum = 0;
        for(let j = i; j<array.length; j++){
            sum += array[j];
            
            if(sum==n){
                count++;
                break;
            }
            if(sum>n){
                break;
            }
        }
    }
    
    return count;
}
