const alphabetMap = {
   	'zero': 0,
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9,
};

function solution(s) {
    const chars = s.split('');
  
    const answer = [];
    
    let stack = [];
    let in_number = null;
    for(let i = 0; i < chars.length; i++) {
        const c = chars[i];
        
        if(in_number === null) {
            in_number = Number.isInteger(Number(c));
        }
        
        stack.push(c);
        
        const is_last = i === chars.length-1;
        const next_is_number = Number.isInteger(Number(chars[i+1]));
        const next_change = is_last ? false : next_is_number != in_number;
        
        if(in_number) {
            if(is_last || next_change) {
                answer.push(stack.join(''));
                stack = [];
            }
        } else {
            if(is_last || next_change || alphabetMap[stack.join('')] !== undefined) {
                answer.push(alphabetMap[stack.join('')]);
                stack = [];
            }
        }
        
        if(next_change) {
            in_number = !in_number;
        }
    }
    
    return Number(answer.join(''));
}
