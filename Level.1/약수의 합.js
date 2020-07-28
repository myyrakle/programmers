function solution(n) {
    return [...Array(n).keys()].reduce((acc, e)=>{
        if(n%(e+1)===0){
            return acc+(e+1);
        }
        
        return acc; 
    }, 0);
}
