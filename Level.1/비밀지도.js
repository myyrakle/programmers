function solution(n, arr1, arr2) {
    const a = arr1.map((e) => {
        const _1 = e.toString(2);
        const _2 = "0".repeat(n - _1.length) + _1;
        return _2;
    });
    
    const b = arr2.map((e) => {
        const _1 = e.toString(2);
        const _2 = "0".repeat(n - _1.length) + _1;
        return _2;
    });
    
    const answer = a.map((e, i)=>{
        return e.split('').map((e2, j)=>
            e2=='0' && b[i][j]=='0' ? ' ' : '#'
        ).join('');
    })
    
    return answer;
}
