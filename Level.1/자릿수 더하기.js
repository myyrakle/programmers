function solution(n)
{
    return String(n).split('').reduce((acc,e)=>{
        return acc+parseInt(e);
    }, 0);
}
