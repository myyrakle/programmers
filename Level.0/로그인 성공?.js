function solution([inputId, inputPassword], db) {
    let answer = 'fail';
    
    db.forEach(([id, password])=>{
        if(inputId == id) {
            if(inputPassword == password) {
                answer = 'login';
            } else {
                answer = 'wrong pw';
            }
        }  
    });
    
    return answer;
}
