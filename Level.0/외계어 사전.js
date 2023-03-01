function solution(spell, dic) {
    return dic.find(e=>
        spell.every(s=>e.includes(s)) 
    ) ? 1 : 2;
}
