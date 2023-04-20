function solution(numbers) {
    const map = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    }
    
    numbers.map(e=>{
        map[e] = true;
    });
    
    return Object.entries(map).reduce((acc, [k, v])=>{
        if(v) {
            return acc;
        } else {
            return acc + Number(k);
        }
    }, 0);
}
