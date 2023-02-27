function solution(s1, s2) {
    const s2Set = new Set(s2);
    
    return s1.filter(e => s2Set.has(e)).length;
}
