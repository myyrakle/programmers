function solution(my_string) {
    const set = new Set();
    
    return my_string.split('').filter(e=>{
        if(set.has(e)) {
            return false;
        } else {
            set.add(e);
            return true;
        }
    }).join('');
}
