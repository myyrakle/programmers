function solution(citations) {
    const sorted = citations.sort((l,r)=>l-r);
    
    let prev = null;
    for(let i = sorted.length-1; i!=0; i--){
        if(sorted[i]===sorted[i-1]){
            continue;
        }
        
        if(
            sorted[i]<=(sorted.length-i)
            &&
            sorted[i]>=(i-0)
        ){
           return sorted[i];
        }
    }
    
    return 0;
}
