function solution(numbers) {
    let max = null;
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i == j) {
                continue;
            }
            
            const mul = numbers[i] * numbers[j];;
            
            if(max==null) {
                max = mul;
            } else if(max < mul) {
                max = mul;
            }
        }
    }
    
    return max;
}
