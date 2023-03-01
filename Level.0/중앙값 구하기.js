function solution(array) {
    array.sort((l,r)=>l-r);
    return array[Math.floor(array.length/2)];
}
