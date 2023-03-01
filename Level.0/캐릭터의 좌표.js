function solution(keyinput, board) {
    const current = [0, 0]
    
    const X_MAX = Math.floor(board[0] / 2);
    const Y_MAX = Math.floor(board[1] / 2);
    
    keyinput.forEach(e=>{
        switch(e){
            case 'left': {
                if(-X_MAX == current[0]) {
                    return;
                }
                
                current[0]-=1;
                break;
            }
            case 'right': {
                if(X_MAX == current[0]) {
                    return;
                }
                
                current[0]+=1;
                break;
            }
            case 'up': {
                if(Y_MAX == current[1]) {
                    return;
                }
                
                current[1]+=1;
                break;
            }
            case 'down': {
                if(-Y_MAX == current[1]) {
                    return;
                }
                
                current[1]-=1;
                break;
            }
        }
    })
    
    return current;
}
