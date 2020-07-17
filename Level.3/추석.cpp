#include <iostream>

#include <string>
#include <vector>
#include <algorithm>
#include <utility>
#include <cstdint>
#include <cmath>

using namespace std;

pair<long long, long long> to_converted_pair(const std::string &text)
{
    int year;
    int month;
    int day;
    int hour;
    int minute;
    double second;

    double processing_time;

    sscanf(text.data(), "%d-%d-%d %d:%d:%lf %lfs", &year, &month, &day, &hour, &minute, &second, &processing_time);

    int millisecond = fmod(second, 1) * 1000;

    long long end_time = millisecond + (int(second / 1) * 1000) + (minute * 1000 * 60) + (hour * 1000 * 60 * 60) + (day * 1000 * 60 * 60 * 24); // + (year * 1000 * 60 * 60 * 24 * 365);
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
    for (const auto &e : converted)
    {
        const auto start = e.first;
        const auto end = e.second;

        // const auto start_count = count_if(
        //     converted.begin(), converted.end(),
        //     [&start](pair<long long, long long> &e) {
        //         return (start <= e.first && e.first <= start + 999) || (start <= e.second && e.second <= start + 999);
        //     });

        // max = start_count > max ? start_count : max;

        const auto end_count = count_if(
            converted.begin(), converted.end(),
            [&end](pair<long long, long long> &e) {
                return (end <= e.first && e.first <= end + 1000) || (end <= e.second && e.second <= end + 1000);
            });

        max = end_count > max ? end_count : max;

        //break;
    }

    return max;
}

int main()
{
    vector<string> data{"2016-09-15 20:59:57.421 0.351s"s,
                        "2016-09-15 20:59:58.233 1.181s"s,
                        "2016-09-15 20:59:58.299 0.8s"s,
                        "2016-09-15 20:59:58.688 1.041s"s,
                        "2016-09-15 20:59:59.591 1.412s"s,
                        "2016-09-15 21:00:00.464 1.466s"s,
                        "2016-09-15 21:00:00.741 1.581s"s,
                        "2016-09-15 21:00:00.748 2.31s"s,
                        "2016-09-15 21:00:00.966 0.381s"s,
                        "2016-09-15 21:00:02.066 2.62s"s};

    //"2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"
    /* 기대값 1
        "2016-09-15 01:00:04.001 2.0s",
        "2016-09-15 01:00:07.000 2s"
        */

    /* 기대값 2
     "2016-09-15 01:00:04.002 2.0s",
     "2016-09-15 01:00:07.000 2s"
*/
    /*"2016-09-15 20:59:57.421 0.351s"s,
        "2016-09-15 20:59:58.233 1.181s"s,
        "2016-09-15 20:59:58.299 0.8s"s,
        "2016-09-15 20:59:58.688 1.041s"s,
        "2016-09-15 20:59:59.591 1.412s"s,
        "2016-09-15 21:00:00.464 1.466s"s,
        "2016-09-15 21:00:00.741 1.581s"s,
        "2016-09-15 21:00:00.748 2.31s"s,
        "2016-09-15 21:00:00.966 0.381s"s,
        "2016-09-15 21:00:02.066 2.62s"s*/

    // cout <<
    cout
        << solution(data);
}
