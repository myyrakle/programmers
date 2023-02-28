function solution(n) {
    let i = 1;
    let _x3 = 1;
    while(true) {
        if(n==1) {
            return 1;
        }
        
        _x3+=1;
        
        // 3의 배수거나, 3이 포함되어있으면 증가 
        while(_x3%3 == 0 || String(_x3).split('').find(e=>e=='3')) {
            _x3+=1;
        }
        
        i+=1;
        
        if(n == i) {
            return _x3;
        }
    }
}
