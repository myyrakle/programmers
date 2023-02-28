function solution(a, b) {
    while(true) {
        let hasSome = false;
        
        for(let i = 2; i <= Math.min(a,b); i+=1) {
            if(Number.isInteger(a/i) && Number.isInteger(b/i)) {
                a /= i;
                b /= i;
                
                hasSome = true;
                break;
            }
        }
        
        if(hasSome) {
            continue;
        } else {
            break;
        }
    }
    
    while(b >= 2 && b%2 == 0) {
        b/=2;
    }
    
    while(b >= 5 && b%5 == 0) {
        b/=5;
    }
    
    return b == 1 ? 1 : 2;
}
