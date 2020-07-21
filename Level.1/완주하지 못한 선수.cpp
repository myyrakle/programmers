#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>

using namespace std;

string solution(vector<string> participant, vector<string> completion)
{
    unordered_multiset<string> part(participant.begin(), participant.end());

    for (const auto &e : completion)
    {
        part.erase(part.find(e));
    }

    return *part.begin();
}
