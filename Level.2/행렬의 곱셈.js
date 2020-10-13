function solution(arr1, arr2) {
    return [...Array(arr1.length)].map((row, i) => 
           [...Array(arr2[0].length)].map((column, j) => 
            arr1[i].reduce((acc, e, k) => acc + (e * arr2[k][j]), 0)))
}
