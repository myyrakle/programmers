function recursive(food, index) {
    if(index === 0) {
        return recursive(food, index + 1).join('');
    }
    
    if(index === food.length) {
        return [0];
    }
    
    const current = food[index];
    const each = Math.floor(current/2)
    
    if(each < 1) {
        return recursive(food, index + 1);
    }
    
    const side = String(index).repeat(each);
    
    const center = recursive(food, index + 1);
    
    return [side].concat(center).concat([side]);
}

function solution(food) {
    return recursive(food, 0);
}
