/**
 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length/2)];
};
function majorityElement2(nums: number[]): number {
    const len = nums.length;
    if(len == 1) return  nums[0];
    const maxLen = len/2;
    const dic = new Map();
    for(let i = 0;i < nums.length;i++){
        const n = nums[i];
        const item = dic.get(nums[i]);
        item ? dic.set(n, item+1) : dic.set(n, 1);
        if(item+1 > maxLen){
            return nums[i];
        }
    }
    return nums[0]
};
function majorityElement1(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let maxLen = nums.length/2;
    let count = 1;
    for(let i = 0;i < nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            ++count;
            if(count > maxLen) {
                return nums[i];
            }
        }else {
            count = 1;
        }
    }
    return nums[0]
};

console.log(majorityElement([2,2,1,1,1,2,2,7,7,7,7,7,7,7,7]));
// console.log(majorityElement([1]));