function solution(answers) {
    let $1 = [];
    let $2 = [];
    let $3 = [];

    for (let i = 0; i < 2000; i++) {
        $1 = $1.concat([1, 2, 3, 4, 5]);
    }

    for (let i = 0; i < 1250; i++) {
        $2 = $2.concat([2, 1, 2, 3, 2, 4, 2, 5]);
    }

    for (let i = 0; i < 1000; i++) {
        $3 = $3.concat([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
    }

    let $1_count = 0;
    let $2_count = 0;
    let $3_count = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == $1[i]) {
            $1_count++;
        }
        if (answers[i] == $2[i]) {
            $2_count++;
        }
        if (answers[i] == $3[i]) {
            $3_count++;
        }
    }

    const answer = [];

    if ($1_count >= $2_count && $1_count >= $3_count) {
        answer.push(1);

        if ($1_count == $2_count) {
            answer.push(2);
        }

        if ($1_count == $3_count) {
            answer.push(3);
        }
    } else if ($2_count >= $1_count && $2_count >= $3_count) {
        answer.push(2);

        if ($2_count == $1_count) {
            answer.push(1);
        }

        if ($2_count == $3_count) {
            answer.push(3);
        }
    } else if ($3_count >= $1_count && $3_count >= $2_count) {
        answer.push(3);

        if ($3_count == $1_count) {
            answer.push(1);
        }

        if ($3_count == $2_count) {
            answer.push(2);
        }
    }

    answer.sort((l, r) => l - r);

    return answer;
}
