#include <string>
#include <vector>
#include <list>

using namespace std;

auto solution(int n) -> vector<int>
{
    list<int> numbers;
    for (int i = 0; i < n; i++)
    {
        if (i == 0)
        {
            numbers.push_back(0);
            continue;
        }

        list<int> reverse(numbers.rbegin(), numbers.rend());
        for (auto &e : reverse)
        {
            e = !e;
        }

        numbers.push_back(0);
        numbers.insert(numbers.end(), reverse.begin(), reverse.end());
    }

    return std::vector<int>(numbers.begin(), numbers.end());
}
