function solution(n) {
    if(n==0){
        return "";
    }
    
    return solution(n-1) + (n%2==1 ? '수' : '박');
}
