function solution(s) {
    let index = 1;
    
    return s.split('').map((e)=>{
        if(e==' '){
            index = 1;
            return e;
        }
        
        if(index%2==1){
            index++;
            return e.toUpperCase();
        } else {
            index++;
            return e.toLowerCase();
        }
        
    }).join('');
}
