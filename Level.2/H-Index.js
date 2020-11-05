function solution(citations) {
    let result = citations.length;
    let done = false;
    
    citations.sort((l,r)=>r-l).forEach((e, i)=>{
        if(e<=i && !done) {
            result = i;
            done = true;
        }
    });
    
    return result;
}
