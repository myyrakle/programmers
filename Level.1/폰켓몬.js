function solution(nums) {
    const max = Math.floor(nums.length/2);
    const set = new Set(nums);
    const size = set.size;
    
    if(size > max) {
        return max;
    } else {
        return size;
    }
}
