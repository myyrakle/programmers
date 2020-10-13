function fibonacci(n){
    const arr = [];

    function _fibonacci(n){
        if(n < 2){
            return n;
        }

        if(!arr[n]){
            arr[n] = (_fibonacci(n-1) % 1234567 + _fibonacci(n - 2) % 1234567);
        }
        
        return arr[n];
    }
    
    return _fibonacci(n);
}

function solution(n) {
    return parseInt(fibonacci(n));
}
