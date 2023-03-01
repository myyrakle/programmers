function solution(numbers, direction) {
    switch(direction) {
        case "left": 
            {
                numbers.push(numbers.shift());
            }
            break;
        case "right": 
            {
                numbers.unshift(numbers.pop());
            }
            break;
    }
    
    return numbers;
}
