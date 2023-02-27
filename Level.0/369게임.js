function solution(order) {
    return String(order).split('').filter(e=>['3','6','9'].includes(e)).length;
}
