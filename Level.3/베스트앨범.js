function solution(genres, plays) {
    const obj = {};
    [...Array(genres.length)].forEach((_, i)=>{
        if(!obj[genres[i]]){
            obj[genres[i]] = {sum:0, element:[]};
        }  
        
        obj[genres[i]].sum += plays[i];
        obj[genres[i]].element.push({index:i, time:plays[i]});
    });
    return Object.entries(obj).
        map(([, v])=>v).
        sort((l, r)=>r.sum-l.sum).
        map(e=>
            (e.element.sort((l, r)=>r.time-l.time).
             map(e=>e.index))
        ).
        flat();
}
