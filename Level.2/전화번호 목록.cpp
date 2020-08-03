#include <string>
#include <vector>
#include <regex>

using namespace std;

bool solution(vector<string> phone_book) 
{
    for(int i = 0; i<phone_book.size(); i++) 
    {
        regex search_text{"^"+phone_book[i]+"*"};
        
        for(int j = 0; j<phone_book.size(); j++)
        {
            if(i==j)
            {
                continue;
            }
            
            if(regex_search(phone_book[j], search_text))
            {
                return false;
            }
        }
    }
    
    return true;
}
