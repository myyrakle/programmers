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
    int year;
    int month;
    int day;
    int hour;
    int minute;
    double second;

    double processing_time; //처리시간

    sscanf(text.data(), "%d-%d-%d %d:%d:%lf %lfs", &year, &month, &day, &hour, &minute, &second, &processing_time);

    int millisecond = int(second * 1000) % 1000;

    long long end_time = millisecond + (int(second / 1) * 1000) + (minute * 1000 * 60) + (hour * 1000 * 60 * 60) + (day * 1000 * 60 * 60 * 24) + (month * 1000 * 60 * 60 * 24 * 31) + (year * 1000 * 60 * 60 * 24 * 365);

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
