function solution(participant, completion) {
    participant = participant.reduce((acc, e)=>{
        if(acc[e]){
            acc[e]++;
        } else {
            acc[e]=1;
        }
        return acc;
    }, {});
    
    completion.map(e=>{
        if(participant[e]==1){
            delete participant[e];
        } else {
            participant[e]--;
        }
    });
    
    return Object.keys(participant)[0];
}
