/**
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


1.买入的日子 < 卖出的日子
2.如果买入的价格高于卖出的价格，不卖
3.找到买入最低的价格与卖出最高的价格

 */


function maxProfit(prices: number[]): number {
    let miniPrice = prices[0];
    let maxPrice = 0;
    for(let i = 1; i < prices.length; i++){ 
        if(miniPrice > prices[i]){
            miniPrice = prices[i]
        }else if(prices[i]-miniPrice > maxPrice){
            maxPrice = prices[i]-miniPrice;
        }
    }
    return maxPrice;
};
function maxProfit3(prices: number[]): number {
    const sum = [] as number[];
    const len = prices.length;
    let p1 = 0;
    let p2 = p1+1;
    let count = 0;
    for(let i = 1; i < len; i++){ 
        ++count
        if(prices[p1] > prices[i]){
            console.log(p2,p1,i)
            // 从开计算
            const bb = prices[p2] - prices[p1];
            bb > 0 ? sum.push(bb) : '';
            p1 = i;
            p2 = p1+1;
            continue;
        }else if(prices[p2]<prices[i]){
            console.log('else',p2,p1,i)
            p2 = i;
        }
        if(i == len-1){
            sum.push(prices[p2] - prices[p1]);
        }
    }
    console.log("count = ", count, ' len=',len)
    console.log("sum = ",sum.length)
    sum.sort((a, b) => a - b)
    console.log("sum=",sum)
    return sum[sum.length-1] || 0;
};
function maxProfit2(prices: number[]): number {
    const len = prices.length;
    let p1 = 0;
    let p2 = p1+1;
    let sum = 0;
    let lastMaxIndex = p2;
    let count = 0;
    while(p1 < len-1){
        count++;
        // console.log('start',p1,p2,);
        if(prices[p1] < prices[p2] && sum < prices[p2] - prices[p1]){
            sum = prices[p2] - prices[p1];
            // console.log(p1,p2,);
        }else if(prices[p1] >= prices[p2] && p2-p1 == 1){
            // console.log('jump1',p1,p2,);
            ++p1;
            p2 = p1;
        }
        if(p2 > len-1){
            ++p1;
            p2 = p1 + 1;
            if(p1 === lastMaxIndex || sum >=  prices[lastMaxIndex] - prices[p1]){
                ++p1;
                p2 = p1 + 1;
                lastMaxIndex = p2;
            }
        }else{
            ++p2;
            lastMaxIndex = prices[lastMaxIndex] < prices[p2] ? p2 : lastMaxIndex
        }
    }
    console.log("len=",len,'count=',count);
    return sum;
};

// const nums1 = [7,6,4,3,1];
const nums1 = [1,1,1,1,1,1,1,1,10,4,30,2,100,5,100,1,200,0];

console.log(maxProfit(nums1));