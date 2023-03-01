function solution(emergency) {
    return emergency.map((e,i)=>({level:e, i:i})).sort((l,r)=>r.level-l.level).map((e,i)=>({rank:i+1, i:e.i})).sort((l,r)=>l.i-r.i).map(e=>e.rank);
}
