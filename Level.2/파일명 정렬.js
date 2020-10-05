function solution(files) {
    return files.sort((l, r)=>{
        const lHead = /[a-zA-Z]*/.exec(l.toUpperCase());
        const rHead = /[a-zA-Z]*/.exec(r.toUpperCase());
        
        if(lHead < rHead){
            return -1;
        }
        if(lHead > rHead){
            return 1;
        }
        
        const lNumber = l.match(/[0-9]+/);
        const rNumber = r.match(/[0-9]+/);
        return lNumber - rNumber;
    });
}
