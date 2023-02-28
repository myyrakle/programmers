function solution(sides) {
    sides = sides.sort((l,r)=>r-l);
    return sides[0] < (sides[1] + sides[2]) ? 1 : 2;
}
