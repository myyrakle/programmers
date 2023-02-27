function solution(n, numlist) {
    return numlist.filter(e=>Number.isInteger(e/n));
}
