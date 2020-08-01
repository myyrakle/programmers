function solution(N, stages) {
    return [...Array(N)].map((e, i)=>{
        const failed = stages.filter(e=>e==(i+1)).length;
        const all = stages.filter(e=>e>=(i+1)).length;
        
        let rate = failed/all
        
        if(all===0){
            rate = 0;
        }
        
        return {rate, stage:i+1};
    }).sort((l,r)=>{
        if(r.rate==l.rate){
            return l.stage - r.stage;
        }
        return r.rate-l.rate;
    }).map(e=>e.stage);
}
