function solution(name, yearning, photo) {
    const answer = [];
    
    const map = {};
    name.map((e, i)=>{
        map[e] = yearning[i];
    });
    
    
    for(const photoGroup of photo) {
        answer.push(photoGroup.reduce((acc, e)=>{
            return acc + (map[e] ?? 0);
        }, 0))
    }
    
    return answer;
}
