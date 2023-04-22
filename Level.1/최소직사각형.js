function solution(sizes) {
    let max_w = 0; 
    let max_h = 0;
    
    sizes.map(([w, h])=>{
        if(w < h) {
            let temp = w; 
            w = h;
            h = temp;
        } 
        
        if(max_w < w) {
            max_w = w;
        } 

        if(max_h < h) {
            max_h = h;
        } 
    });
    
    return max_w * max_h;
}
