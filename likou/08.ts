/**
给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。
 */


function maxProfit(prices: number[]): number {
    let p1 = prices[0];
    let all = 0
    for(let i = 1; i < prices.length; i++){ 
        if(prices[i]<prices[i-1]){
            if(prices[i-1]-p1 > 0) all += prices[i-1]-p1;
            p1 = prices[i];
        }else if(i == prices.length-1){
            if(prices[i]-p1 > 0) all += prices[i]-p1;
        }
    }
    return all;
};

// const nums1 = [1,2,3,4,5];
const nums1 = [1,1,1,1,1,1,1,1,10,4,30,2,100,5,100,1,200,1000];

console.log(maxProfit(nums1));