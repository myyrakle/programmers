function solution(n, lost, reserve) {
    let students = [...Array(n)].map(_=>1);
    reserve.forEach(e=>students[e-1]++);
    lost.forEach(e=>students[e-1]--);
    
    students.map((e, i)=>{
        if(e===2 && i>0 && students[i-1]===0){
            students[i]--;
            students[i-1]++;
        }
        else if(e===2 && i<n && students[i+1]===0){
            students[i]--;
            students[i+1]++;
        }
    });
    
    return students.reduce((acc, e)=>acc+(e>0?1:0),0);
}
