function solution(numlist, n) {
    return numlist.sort((l, r)=>{
        const lDiff = Math.abs(l-n);
        const rDiff = Math.abs(r-n);
        
        if(lDiff == rDiff) {
            return r - l;
        } else {
            return lDiff - rDiff;
        }
    });
}
