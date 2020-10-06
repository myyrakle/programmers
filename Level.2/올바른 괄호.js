function solution(s){
    return s.split('').reduce((acc, e)=>{
        if(acc<0){
            return -1;
        }
        
        if(e == '('){
            return acc + 1;
        }
        if(e == ')' && acc > 0){
            return acc - 1;
        }
        if(acc <= 0 && e == ')'){
            return -1
        }
    }, 0) === 0;
}
