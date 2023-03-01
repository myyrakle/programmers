function solution(n) {
    const set = new Set();
    let reduced = n;
    
    for(let i = 2; i<=n; i+=1) {
        while(reduced%i == 0) {
            set.add(i);
            reduced/=i;
        }
    }
    
    return [...set].sort((l,r)=>l-r);
}
