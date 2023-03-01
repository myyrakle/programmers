function solution(board) {
    board.forEach((row, i)=>{
        row.forEach((e, j)=>{
            if(e == 1) {
                if(board?.[i+1]?.[j] === 0) {
                    board[i+1][j] = 99;
                }
                if(board?.[i-1]?.[j] === 0) {
                    board[i-1][j] = 99;
                }
                if(board?.[i]?.[j+1] === 0) {
                    board[i][j+1] = 99;
                }
                if(board?.[i]?.[j-1] === 0) {
                    board[i][j-1] = 99;
                }
                if(board?.[i+1]?.[j+1] === 0) {
                    board[i+1][j+1] = 99;
                }
                if(board?.[i+1]?.[j-1] === 0) {
                    board[i+1][j-1] = 99;
                }
                if(board?.[i-1]?.[j+1] === 0) {
                    board[i-1][j+1] = 99;
                }
                if(board?.[i-1]?.[j-1] === 0) {
                    board[i-1][j-1] = 99;
                }
            }
        });
    })
    
    return board.flat().filter(e=>e===0).length;
}
