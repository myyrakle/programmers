function gcd(a, b) {
    if(b == 0) return a;  
    else return gcd(b, a%b); 
}

function lcm(a, b) {
    return a*b/gcd(a,b);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    const lcmValue = lcm(denom1, denom2);
    
    numer1 *= (lcmValue/denom1);
    denom1 *= (lcmValue/denom1);
    
    numer2 *= (lcmValue/denom2);
    denom2 *= (lcmValue/denom2);
    
    numer3 = numer1 + numer2;
    denom3 = denom2;
    
    for(let i = 2; i<=Math.min(numer3, denom3); i++) {
        while(numer3%i == 0 && denom3%i == 0) {
            numer3/=i;
            denom3/=i;
        }
    }
        
    return [numer3, denom3];
}
