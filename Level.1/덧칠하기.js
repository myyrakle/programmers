function solution(n, m, section) {
  let answer = 0;
  let i = 0;

  while (i < section.length) {
    const current = section[i];
    const startIndex = i;

    for (let nextIndex = startIndex; nextIndex < section.length; nextIndex++) {
      const next = section[nextIndex];
      
      if (next >= current + m) {
          break;
      }

      i = nextIndex + 1;
    };

    answer += 1;
  };

  return answer;
};
