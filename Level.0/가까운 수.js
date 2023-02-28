function solution(array, n) {
    return array.sort((l,r)=>{
        const lDiff = Math.abs(l-n);
        const rDiff = Math.abs(r-n);
        
        if(lDiff==rDiff) {
            return l - r;
        } else {
            return lDiff - rDiff;
        }
        
    })?.[0];
}
