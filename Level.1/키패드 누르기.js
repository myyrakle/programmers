const KEYPAD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
];

function findIndex(x){
    let i = 0;
    let j = 0;
    
    for(;i<KEYPAD.length;i++){
        for(j=0; j<KEYPAD[i].length; j++){
            if(KEYPAD[i][j]==x){
                return {i, j};
            }
        }
    }
}

function solution(numbers, hand) {
    const rightHanded = hand === 'right';
    const result = [];
    
    const left = {i:3, j:0}; // *
    const right = {i:3, j:2}; // #
    
    return numbers.map(e=>{
        const index = findIndex(e);
      
        const leftLen = Math.abs(index.i-left.i)+Math.abs(index.j-left.j);
        const rightLen = Math.abs(index.i-right.i)+Math.abs(index.j-right.j);
        
        if([1,4,7].includes(e)){
            left.i = index.i;
            left.j = index.j;
            return 'L';
        } 
        else if([3,6,9].includes(e)){
            right.i = index.i;
            right.j = index.j;
            return 'R';
        }
        else if(leftLen<rightLen){
            left.i = index.i;
            left.j = index.j;
            return 'L';
        } else if(leftLen>rightLen){
            right.i = index.i;
            right.j = index.j;
            return 'R';
        } else {
            if(rightHanded){
                right.i = index.i;
                right.j = index.j;
                return 'R';
            } else {
                left.i = index.i;
                left.j = index.j;
                return 'L';
            }
        }
    }).join('');
}
