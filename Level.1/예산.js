function solution(d, budget) {
    return d.sort((l,r)=>l-r).reduce((acc,e)=>{
        if(budget<e){
            return acc;
        }
        
        budget-=e;
        return acc+1;
    }, 0);
}
