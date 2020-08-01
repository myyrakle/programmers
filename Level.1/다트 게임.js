function solution(dartResult) {
    const arr = dartResult.split('');
    
    const scores = [];
    
    const context = {
        score:'',
        bonus: null,
        onStar: false,
        onAcha: false,
    }
    
    for(let i = 0; i<arr.length; i++){
        if('0'<=arr[i]&&arr[i]<='9'){
            context.score = context.score + arr[i];
            continue;
        }
        
        if(['S', 'D', 'T'].includes(arr[i])){
            switch(arr[i]){
                case 'S': 
                    context.bonus = 1;
                    break;
                case 'D': 
                    context.bonus = 2;
                    break;
                case 'T': 
                    context.bonus = 3;
                    break;
            }
            
            if(i+1<arr.length && arr[i+1]=='*'){
                if(scores.length!=0){
                    scores[scores.length-1]*=2;
                }
                context.onStar = true;
                i++;
            } 
            if(i+1<arr.length && arr[i+1]=='#'){
                context.onAcha = true;
                i++;
            }
            
            context.score = Math.pow(parseInt(context.score), context.bonus);
            
            if(context.onStar){
                context.onStar = false;
                context.score *= 2;
            }
            
            if(context.onAcha){
                context.onAcha = false;
                context.score *= -1;
            }
            
            scores.push(context.score);
            context.score='';
        }
    }
    
    return scores.reduce((acc, e)=>acc+e, 0);
}
