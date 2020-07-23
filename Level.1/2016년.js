function solution(a, b) {
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //달력을 펼쳐놓고 확인

    let weekIndex = 0;

    const table = days.map((e) => {
        const month = [];

        for (let i = 0; i < e; i++) {
            month.push(week[weekIndex]);

            if (weekIndex >= 6) {
                weekIndex = 0;
            } else {
                weekIndex++;
            }
        }

        return month;
    });

    return table[a - 1][b - 1];
}
