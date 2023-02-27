function solution(common) {
    var answer = 0;
    
    // 등차수열인지 여부
    let isArithmetic = common[0]-common[1] === common[1]-common[2];
    
    if(isArithmetic) {
        const diff = common[1] - common[0];
        return common[common.length-1] + diff;
    } else {
        const ratio = common[1] / common[0];
        return common[common.length-1] * ratio;
    }
}
