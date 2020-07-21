function solution(array, commands) {
    const answer = [];

    for (const command of commands) {
        let slice = array.slice(command[0] - 1, command[1]);
        console.log("배열", slice);
        slice.sort((l, r) => l - r);
        console.log("정렬", slice);

        answer.push(slice[command[2] - 1]);
    }

    return answer;
}
