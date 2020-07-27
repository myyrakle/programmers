function solution(s){
    const result = s.split('').reduce((all, e)=>{
        if(e=='p'||e=='P'){
            all.p++;
        } 
        if(e=='y'||e=='Y'){
            all.y++;
        }
        
        return all;
    }, {p:0, y:0});

    return result.p===result.y;
}
