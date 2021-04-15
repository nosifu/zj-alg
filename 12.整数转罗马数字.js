/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const m = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    const keys = Object.keys(m).reverse()
    console.log('keys:', keys);
    let i = 0
    let result = ''
    while (num > 0) {
        console.log('num:', num);
        console.log('i:', i);
        console.log('keys[i]:', keys[i]);
        if (num - keys[i] >= 0) {
            result += m[keys[i]]
            num = num - keys[i]
        } else {
            i++
        }
    }
    return result
};
// @lc code=end

