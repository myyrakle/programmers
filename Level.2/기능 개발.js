Array.prototype.back = function(){
    return this[this.length-1];
}

function solution(progresses, speeds) {
    let prev = null;
    return progresses.map((e, i)=>{
        const remain = 100-e;
        const speed = speeds[i];
        
        let quotient = parseInt(remain/speed);
        if(remain%speed>0){
            quotient++;
        }
        
        return quotient;
    }).reduce((acc, e)=>{
        if(prev===null){
            acc.push(1);
            prev = e;
            return acc;
        } 
        if(e<=prev){
            acc[acc.length-1]++;
            return acc;
        }
        else {
            acc.push(1);
            prev = e;
            return acc;
        }
    }, []);
}
