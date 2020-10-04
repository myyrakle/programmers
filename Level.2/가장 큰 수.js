function solution(numbers) {
    return numbers.map(e=>String(e)).sort(
        (l, r)=>{
            let left = l;
            while(left.length<4){
                left+=l;
            }
            left = left.substring(0, 4);
            
            let right = r;
            while(right.length<4){
                right+=r;
            }
            right = right.substring(0, 4);
            
            return left.localeCompare(right);
        }
    ).reverse().reduce((acc, e)=>acc+e, '');
}
