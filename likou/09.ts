/**
给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。

1. 到达i位置时的剩余步数必须大于1，否则无法到达最后一步
2. 存储达到i位置时的最大步数
3. 每行进一步都会消耗1

 */
function canJump(nums: number[]): boolean {
    if(nums.length === 1) return true; // 只有一个元素，直接到达最后一步
    if(nums[0] == 0) return false; // 多元素，第一个元素为0，无法到达最后一步
    let sum = nums[0]; // sum等于第一个元素
    // 遍历从第二元素开始，到最后一步之前的元素截止
    // 通用算法：到达i元素之后，剩余步数必须大于0，否则无法到达最后一步
    for (let i = 1; i < nums.length-1; i++) { 
        --sum // 每走一步消耗1
        if(sum + nums[i] <= 0){ // 到达i位置时，可用最大步数为0,当前位置步数为0，无法继续
            return false;
        }
        if(sum < nums[i]){ // 当前i位置可用步数较大，使用之
            sum = nums[i]
        }
    }
    return sum > 0;
};

// const nums = [3,2,1,0,4];
// const nums = [2,3,1,1,4];
const nums = [0,1];
console.log(canJump(nums));