function solution([a, b]) {
    const max = a + b - 1;
    const min = Math.max(a, b) - Math.min(a, b) + 1;
    return max-min+1;
}
