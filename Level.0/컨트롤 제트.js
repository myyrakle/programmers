function solution(s) {
    return s.replace(/[-0-9]+ Z/g, '').split(' ').reduce((acc,e)=>Number(e)+acc, 0);
}
