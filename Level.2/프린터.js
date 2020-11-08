function solution(priorities, location) {
    let answer = 0;
    
    priorities = priorities.map((e, i)=>({value:e, index:i}));
    
    while(priorities.length!=0){
        const first = priorities.shift();
        
        if(priorities.some(e=> e.value>first.value)){
            priorities.push(first);
            continue;
        }
        else {
            answer+=1;
            if(location === first.index){
                return answer;
            }
        }
    }
}
