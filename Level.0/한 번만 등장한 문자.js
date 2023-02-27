function solution(s) {
    const map = new Map();
    
    s.split('').map(e=>{
        if(map.has(e)) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        }
    });
    
    
    return [...map.entries()].filter(([key, value])=>value==1).map(([key, value])=>key).sort().join('');
}
