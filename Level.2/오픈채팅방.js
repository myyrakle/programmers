function solution(record) {
    let nameTable = {};
    let enterList = []
    
    for(const e of record){
        const [cmd, id, name] = e.split(' ');
        
        switch(cmd){
            case 'Enter':
                nameTable[id]=name;
                break;
            case 'Leave':
                break;
            case 'Change':
                nameTable[id]=name;
                break;
        }
        enterList.push({cmd, id});
    }
    
    const result = [];
    for(const {cmd, id} of enterList){
        switch(cmd){
            case 'Enter':
                result.push(`${nameTable[id]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                result.push(`${nameTable[id]}님이 나갔습니다.`);
                break;
            case 'Change':
                break;
        }
        
    }
    
    return result;
}
