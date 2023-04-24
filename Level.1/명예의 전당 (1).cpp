#include <string>
#include <vector>
#include <iostream>
#include <set>

using namespace std;

vector<int> solution(int k, vector<int> score) {
    vector<int> answer;
    multiset<int, std::greater<int>> list; 
    
    for(const auto& e : score) {
        list.insert(e);
        
        int min;
        
        auto i = list.cbegin();
        int count = 0;
        while(count<k && i!=list.cend()) {
            min = *i;
            
            count++;
            i++;
        }
        
        answer.push_back(min);
    }
    
    return answer;
}
