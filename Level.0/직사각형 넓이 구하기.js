function solution(dots) {
    let xList = dots.map(e=>e[0]);
    let yList = dots.map(e=>e[1]);
    
    return Math.abs(Math.max(...xList)-Math.min(...xList)) * Math.abs(Math.max(...yList)-Math.min(...yList)) 
}
