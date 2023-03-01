function solution(num_list) {
    return num_list.reduce(([even, odd], e)=>{
        if(e%2==0) {
            return [even+1, odd];
        } else {
            return [even, odd+1];
        }
    }, [0,0]);
}
