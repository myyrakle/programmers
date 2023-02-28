function solution(my_string) {
    return my_string.match(/[0-9]+/g)?.reduce((acc, e)=> acc + parseInt(e), 0) ?? 0;
}
