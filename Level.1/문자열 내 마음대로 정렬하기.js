function solution(strings, n) {
    return strings.sort((l,r)=>{
        const compare = l[n].localeCompare(r[n]);
        
        if(compare===0){
            return l.localeCompare(r);
        }
        
        return compare;
    });
}
