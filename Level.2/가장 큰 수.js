function solution(numbers) {
     let answer = numbers.map(String).sort(
        (l, r)=>{
            let left = l + r;
            let right = r + l;

            if(left < right) return -1;
            if(left > right) return 1;
            return 0;
        }
    ).reverse().reduce((acc, e)=>acc+e, '');
    
    if(answer.split('').every(e=>e==='0')){
        return '0';
    }
    
    return answer
}
