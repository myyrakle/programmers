function solution(my_string) {
    return my_string.split('').filter(e=>!['a', 'e', 'i', 'o', 'u'].includes(e)).join('');
}
