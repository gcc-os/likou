/**
给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */
function rotate(nums: number[], k: number): void {
    const k1 = k%nums.length;
    console.log('k1 = ', k1)
    if(k1 == 0){
        return;
    }else if(k1 <= nums.length/2){
        nums.unshift(...nums.splice(nums.length - k1, k1));
    }else{
        const k2 = nums.length-k1;
        console.log('k2 = ', k2)
        nums.push(...nums.splice(0, k2));
    }
};
const nums = [1,2];
const k = 5;
rotate(nums, k)
console.log('nums = ', nums);