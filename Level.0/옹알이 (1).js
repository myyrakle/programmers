function solution(babbling) {
    let answer = 0;
    
    for(let word of babbling) {
        const available_list = new Set(["aya", "ye", "woo", "ma"]);
        
        while(true) {
            if(available_list.length == 0) {
                break;
            }
            
            let matched = false;
            
            for(const available_word of available_list) {
                if(word.startsWith(available_word)) {
                    word = word.replace(available_word, '');
                    available_list.delete(available_word);
                    matched = true;
                    break;
                } else {
                    continue;
                }
            }
            
            if(word == '') {
                answer += 1;
                break;
            } 
            
            if(matched) {
                continue;
            }
            
            // 하나도 없으면 실패한 케이스
            break;
        }
    }
    
    return answer;
}
