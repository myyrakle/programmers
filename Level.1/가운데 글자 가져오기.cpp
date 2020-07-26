#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    
    auto len = s.size() - 1;
    
    if(len%2==0){
        answer.push_back(s[len/2]);
    } else {
        answer.push_back(s[len/2]);
        answer.push_back(s[len/2+1]);
    }
    
    return answer;
}
