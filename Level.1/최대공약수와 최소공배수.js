function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function lcm(n1, n2) {
  //Find the gcd first 
  let gcdValue = gcd(n1, n2);

  //then calculate the lcm
  return (n1 * n2) / gcdValue;
}

function solution(n, m) {
    return [gcd(n,m), lcm(n,m)];
}
