function solution(numbers) {
    return Array.from(new Set(numbers.map((e, i)=>
         numbers.map((e2, j)=>i==j ? null : e+e2).filter(e=>e != null)
    ).flat())).sort((l, r)=>l-r);
}
