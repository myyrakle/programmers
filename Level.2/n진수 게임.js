function solution(n, t, m, p) {
    return [...Array(t*m)].map((_, i)=>Number(i).toString(n)).join('').split('').filter((_, i)=>i%m+1 == p && Math.floor(i/m)<t).join('').toUpperCase();
}
