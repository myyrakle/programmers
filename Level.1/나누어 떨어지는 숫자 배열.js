function solution(arr, divisor) {
    const result = arr.filter(e=>e%divisor===0).sort((l,r)=>l-r);
    
    return result.length===0 ? [-1] : result;
}
