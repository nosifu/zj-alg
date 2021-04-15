s = 'abc'
s = 'abb'
s = 'aab'

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const arr = s.split('')
    const isUse = Array.from({length:s.length}).fill(0)
    const result = new Set()
    const loop = function (temp) {
        for (let i = 0; i < s.length; i++) {
            if (!isUse[i]) {
                temp += s[i]
                if (temp.length >= s.length) {
                    result.add(temp)
                    return
                }
                isUse[i] = 1
                loop(temp)
                isUse[i] = 0
                temp = temp.substr(0, temp.length - 1)
            }
        }
    }
    loop('')
    return [...result]
};

console.log(permutation(s))
