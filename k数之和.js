
/**
 * kSum
 *
 * @param A: An integer array
 * @param k: A positive integer (k <= length(A))
 * @param target: An integer
 * @return: An integer
 */
function kSum(A, k, target) {
    // dp[j][k] = 前i个数，选j个数，总和为k的方法数量
    // dp[j][k] = dp[i-1][j][k] + dp[i-1][j-1][k-A[i]]
    const dp = Array.from({length:k+1}).map(i => new Array(target+1).fill(0))
    console.log('dp:', dp);
    dp[0][0] = 1
    for (let i = 0; i < A.length; i++) {
        for (let j = k; j >= 1; j--) {
            for (let k = target; k >= A[i]; k--) {
                if(dp[j-1][k-A[i]]>0){
                    console.log('i:'+i, 'j:'+j, 'k:'+k, A[i], dp[j-1][k-A[i]])
                }
                dp[j][k] += dp[j-1][k-A[i]]
                console.log(dp+'')
            }
        }
    }
    console.log(dp)
    return dp[k][target]
}

const arr = [10, 20, 30, 40, 50, 60]
const result = kSum(arr, 2, 70)
console.log('result:', result);