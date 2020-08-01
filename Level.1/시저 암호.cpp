#include <string>
#include <vector>

using namespace std;

string solution(string s, int n) {    
    for(auto&e:s){
        if('A'<=e&&e<='Z'){
            e=(e-'A'+n)%26+'A';
            continue;
        } 
        
        if('a'<=e&&e<='z'){
            e=(e-'a'+n)%26+'a';
            continue;
        }
    }
    
    return s;
}
