#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer;
    
    auto i = 0;
    for(const auto& price:prices){
        auto second = 0;
        auto j = i + 1;
        while(j<prices.size()){
            second++;   
            
            if(prices[j]<price){
                break;
            }
            j++;
        }
        answer.push_back(second);
        
        i++;
    }
    
    return answer;
}
