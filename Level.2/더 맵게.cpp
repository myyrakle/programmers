#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> scoville, int K) {
    auto cmp = [](const int&l, const int&r){return l>r;};
    
    make_heap(scoville.begin(), scoville.end(), cmp);

    auto count = 0;
    
    while(scoville.size()>0){
        if(all_of(scoville.begin(), scoville.end(), [&K](auto e){return e>=K;})){
            return count;
        }
        
        if(scoville.empty()){
            return -1;
        }
        
        pop_heap(scoville.begin(), scoville.end(), cmp);
        auto first = scoville.back();
        scoville.pop_back();
        
        if(scoville.empty()){
            return -1;
        }
        
        pop_heap(scoville.begin(), scoville.end(), cmp);
        auto second = scoville.back();
        scoville.pop_back();
        
        auto sum = first + (second*2);
        
        scoville.push_back(sum);
        push_heap(scoville.begin(), scoville.end(), cmp);
        
        count++;
    }
    
    return -1;
}
