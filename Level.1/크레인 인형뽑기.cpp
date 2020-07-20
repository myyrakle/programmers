#include <string>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
    constexpr auto NO_PEPPET = 0;
    
    stack<int> basket;
    int count = 0;
    
    for(const auto& e : moves)
    {
        for(auto&raw : board)
        {
            int& current = raw[e-1];
            if(current != NO_PEPPET)
            {
                if(basket.empty() || basket.top()!=current)
                {
                    basket.push(current);
                }
                else
                {
                    basket.pop();
                    count+=2;
                }
                   
                current = NO_PEPPET;
                break;
            }
        }
    }
    return count;
}
