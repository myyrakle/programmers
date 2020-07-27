function solution(a, b) {
    let answer = 0;

    if(a<b){
        while(a<=b){
            answer+=a;
            a++;
        }    
    }
    else if(a>b){
        while(a>=b){
            answer+=b;
            b++;
        }    
    }else {
        answer = a;
    }

    return answer;
}
