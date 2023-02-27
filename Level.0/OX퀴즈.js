function solution(quiz) {
    return quiz.map(e=>{
        return eval(e.replace('=', '==')) ? 'O' : 'X';
    });
}
