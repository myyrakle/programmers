function solution(M, N) {
    let answer = 0;
    
    const M_count = M - 1;
    answer += M_count;
    
    const N_count = N - 1;
    answer += M * N_count;
    
    return answer;
}
