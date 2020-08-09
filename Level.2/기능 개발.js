function solution(progresses, speeds) {
    let prev = 0;
    return progresses.map((e, i)=>{
        const remain = 100-e;
        const speed = speeds[i];
        
        let quotient = parseInt(remain/speed);
        if(remain%speed>0){
            quotient++;
        }
        
        return quotient;
    }).reduce((acc, e)=>{
        if(acc.length===0 || prev<e){
            acc.push(0);
        }
        acc[acc.length-1]++;
        prev = e;
        return acc;
    }, []);
}
