function maxVal(wt, val, w) {
    const n = wt.length
    let dp = Array.from({length:n+1}).map(i=>Array.from({length: w+1}).fill(0))
    console.log('dp', dp)
    for(let i=1;i<=n;i++){
        for (let j=1;j<=w;j++){
            if(j-wt[i-1]<0) {
                dp[i][j] =  dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-wt[i-1]]+val[i-1])
            }
            console.log(`前${i}个`, `限重${j}时`, w-wt[i-1]<0, dp[i-1][j], dp[i-1][j-wt[i-1]]+val[i-1], 'w-wt[i-1]', w-wt[i-1])
        }
    }
    console.log('dp', dp)
    return dp[n][w]
}


let wt, val, n, w

// 测试用例一
wt = [2, 1, 3]
val = [4, 2, 3]
w = 4
console.log('最大价值为：', maxVal(wt, val, w))

// 测试用例二
wt = [2, 2, 6, 5, 4]
val = [6, 3, 5, 4, 6]
n = wt.length, w = 10
console.log('最大价值为：', maxVal(wt, val, w))

// 测试用例三
wt = [2, 3, 4, 5]
val = [3, 4, 5, 6]
n = wt.length, w = 8
console.log('最大价值为：', maxVal(wt, val, w))