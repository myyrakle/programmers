function gcd(a, b) {
    if(b == 0) return a;  
    else return gcd(b, a%b); 
}

function lcm(a, b) {
    return a*b/gcd(a,b);
}

function solution(n) {
    return lcm(n, 6)/6;
}
