#include <string>
#include <vector>

using namespace std;

__int128 factorial(int n) {
    if(n<=1) {
        return 1; 
    } else {
        return n * factorial(n-1);
    }
}

__int128 solution(int balls, int share) {
    auto result = factorial(balls) / (factorial(balls-share) * factorial(share));
    return result;
}
