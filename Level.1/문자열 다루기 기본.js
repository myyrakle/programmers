function solution(s) {
    return s.split('').every( e=>isNaN(parseInt(e))==false ) && (s.length===4 || s.length===6);
}
