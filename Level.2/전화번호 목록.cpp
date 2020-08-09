#include <iostream>
#include <string>
#include <vector>
#include <regex>

using namespace std;

bool solution(vector<string> phone_book) 
{
    for(int i = 0; i<phone_book.size(); i++) 
    {
        auto search_text = phone_book[i];
        
        for(int j = 0; j<phone_book.size(); j++)
        {
            //접두사 여부 확인
            if(i!=j && phone_book[j].substr(0, search_text.size())==search_text)
            {
                return false;
            }
        }
    }
    
    return true;
}
