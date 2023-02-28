function solution(score) {
    let pinnedRank = null;
    let prevAvg;
    
    return score.map(([eng, math], i)=>{
        return { 
            avg: (eng + math)/2, 
            originalIndex: i,
        };
    }).sort(({ avg: lAvg }, { avg: rAvg })=>{
        return rAvg - lAvg;
    }).map((e, i)=>{
        if(prevAvg && prevAvg == e.avg) {
            e.rank = pinnedRank;
        } else {
            e.rank = i + 1;
            pinnedRank = e.rank;
        }
        
        prevAvg = e.avg;
        
        return e;
    }).sort((l, r)=>{
        return l.originalIndex - r.originalIndex;
    }).map(e=>{
        return e.rank;
    });
}
