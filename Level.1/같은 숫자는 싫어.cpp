#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    arr.erase(std::unique(arr.begin(), arr.end()), arr.end());
    return arr;
}
