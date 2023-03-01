function solution(polynomial) {
    let x = 0; 
    let constant = 0;
    
    polynomial.split(' + ').forEach(e=>{
        if(e.includes('x')) {
            if(e == 'x') {
                x += 1;
            } else {
                x += Number(e.replace('x', ''));
            }
        } else {
            constant += Number(e);
        }
    })
    
    if(x>0 && constant > 0) {
        return `${x == 1 ? '' : x}x + ${constant}`;
    } else if(x>0) {
        return `${x == 1 ? '' : x}x`;
    } else if(constant>0) {
        return `${constant}`;
    } else {
        return '0';
    }
}
