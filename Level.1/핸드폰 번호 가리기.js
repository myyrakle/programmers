function solution(phone_number) {
    return phone_number.split('').reverse().map((e, index)=>index<4?e:'*').reverse().join('');
}
