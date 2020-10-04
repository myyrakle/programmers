function solution(numbers) {
    return numbers.map(String).sort(
        (l, r)=>{
            let left = l.repeat(4);
            let right = r.repeat(4);
            
            if(left < right) return -1;
            if(left > right) return 1;
            return 0;
        }
    ).reverse().reduce((acc, e)=>acc+e, '');
}
