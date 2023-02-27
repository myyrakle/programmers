function solution(my_str, n) {
    const answer = [];
    
    const array = my_str.split('');
    
    for(let i=0; i<array.length; i+=n) {
        answer.push(array.slice(i, i+n).join(''));
    }
    
    return answer;
}
