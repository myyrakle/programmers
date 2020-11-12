#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <list>

using namespace std;

string solution(string number, int k) {
    list<char> clone(number.begin(), number.end());
    const auto len = number.size() - k;
    string result = "";
    
    while(clone.size()!=k){
        auto iter = clone.begin();
        auto max_iter = iter;
        
        int i=0;
        while(i<k && iter!=clone.end()){
            if(*max_iter < *iter){
                max_iter = iter;
            }
            
            i++;
            iter++;
        }
        
        result.push_back(*max_iter);
        clone.erase(max_iter);
    }
    
    return result;
}
