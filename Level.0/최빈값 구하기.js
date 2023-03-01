function solution(array) {
    const counter = new Map();
    
    array.forEach(e=>{
        if(counter.has(e)) {
            counter.set(e, counter.get(e)+1);
        } else {
            counter.set(e, 1);
        }
    })
    
    const list = [...counter.entries()].sort(([_, l], [_2, r])=>r-l);
    
    if(list.length == 1) {
        return list[0][0];
    }
    
    if(list[0][1] == list[1][1]) {
        return -1;
    }
    
    return list[0][0];
}
