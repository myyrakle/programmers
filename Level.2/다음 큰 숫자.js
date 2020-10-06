function solution(n) {
    let originCount = Number(n).toString(2).split('').filter(e=>e=='1').length;
    
    let next = n+1;
    while(true){
        let currentCount = Number(next).toString(2).split('').filter(e=>e=='1').length;
        
        if(originCount == currentCount){
            return next;
        }
        
        next++;
    }
}
