#include <iostream>

#include <string>
#include <vector>
#include <algorithm>
#include <utility>
#include <cstdint>
#include <cmath>

using namespace std;

auto to_converted_pair(const std::string &text) -> pair<long long, long long>
{
    constexpr auto SECOND_TO_MILLI = 1000LL;
    constexpr auto MINUTE_TO_MILLI = 1000LL * 60;
    constexpr auto HOUR_TO_MILLI = 1000LL * 60 * 60;
    constexpr auto DAY_TO_MILLI = 1000LL * 60 * 60 * 24;
    constexpr auto MONTH_TO_MILLI = 1000LL * 60 * 60 * 24 * 32;
    constexpr auto YEAR_TO_MILLI = 1000LL * 60 * 60 * 24 * 365;

    int year;
    int month;
    int day;
    int hour;
    int minute;
    double second;

    double processing_time; //처리시간

    sscanf(text.data(), "%d-%d-%d %d:%d:%lf %lfs", &year, &month, &day, &hour, &minute, &second, &processing_time);

    int millisecond = int(second * 1000) % 1000;

    long long end_time = millisecond +
                         (int(second / 1) * SECOND_TO_MILLI) +
                         (minute * MINUTE_TO_MILLI) +
                         (hour * HOUR_TO_MILLI) +
                         (day * DAY_TO_MILLI) +
                         (month * MONTH_TO_MILLI) +
                         (year * YEAR_TO_MILLI);

    long long start_time = end_time - int(processing_time * 1000) + 1;

    return make_pair(start_time, end_time);
}

int solution(vector<string> lines)
{
    vector<pair<long long, long long>> converted;
    converted.reserve(lines.size());

    for (const auto &e : lines)
    {
        converted.push_back(to_converted_pair(e));
    }

    int max = 0;
    for (int i = 0; i < converted.size(); i++)
    {
        {
            const auto start = converted[i].second;
            const auto end = start + 999;

            int count = 0;
            for (int j = 0; j < converted.size(); j++)
            {
                const auto each_start = converted[j].first;
                const auto each_end = converted[j].second;

                if (
                    (start <= each_start && each_start <= end) ||
                    (start <= each_end && each_end <= end))
                {
                    count++;
                }
            }

            max = count > max ? count : max;
        }

        {
            const auto end = converted[i].first;
            const auto start = end - 999;

            int count = 0;

            for (int j = 0; j < converted.size(); j++)
            {
                const auto each_start = converted[j].first;
                const auto each_end = converted[j].second;

                if (
                    (start <= each_start && each_start <= end) ||
                    (start <= each_end && each_end <= end))
                {
                    count++;
                }
            }

            max = count > max ? count : max;
        }
    }

    return max;
}

int main()
{
    vector<string> data{"2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"};

    //"2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"
    /* 기대값 1
        "2016-09-15 01:00:04.001 2.0s",
        "2016-09-15 01:00:07.000 2s"
        */

    /* 기대값 2
     "2016-09-15 01:00:04.002 2.0s",
     "2016-09-15 01:00:07.000 2s"
    */

    /* 기대값 7
    "2016-09-15 20:59:57.421 0.351s"s,
        "2016-09-15 20:59:58.233 1.181s"s,
        "2016-09-15 20:59:58.299 0.8s"s,
        "2016-09-15 20:59:58.688 1.041s"s,
        "2016-09-15 20:59:59.591 1.412s"s,
        "2016-09-15 21:00:00.464 1.466s"s,
        "2016-09-15 21:00:00.741 1.581s"s,
        "2016-09-15 21:00:00.748 2.31s"s,
        "2016-09-15 21:00:00.966 0.381s"s,
        "2016-09-15 21:00:02.066 2.62s"s
    */

    cout << solution(data) << '\n';
}
