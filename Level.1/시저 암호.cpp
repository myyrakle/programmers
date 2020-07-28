#include <string>
#include <vector>

using namespace std;

string solution(string s, int n) {    
    for(auto&e:s){
        if('A'<=e&&e<='Z'){
            if('Z'<e+n){
                while('Z'<e+n){
                    n-=26;
                }
            }
            e+=n;
            continue;
        } 
        
        if('a'<=e&&e<='z'){
            if('z'<e+n){
                while('z'<e+n){
                    n-=26;
                }
            }
            e+=n;
            continue;
        }
    }
    
    return s;
}
