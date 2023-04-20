function recursive(price, count) {
    if(count == 1) {
        return price;
    }
    
    return (price*count) + recursive(price, count-1);
}

function solution(price, money, count) {
    let cost = recursive(price, count);
    
    if(cost > money) {
        return cost-money
    } 
    else {
        return 0;
    }
}
