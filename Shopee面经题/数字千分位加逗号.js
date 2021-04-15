// 数字千分位加逗号   比如:输入10000    输出 10,000
function formatNum(num) {
    const strNum = num + ''
    const index = strNum.indexOf('.')
    let intPart = index === -1 ? '' : strNum.substring(0, index)
    let floatPart = index === -1 ? strNum : strNum.substring(index)
    console.log('intPart:', intPart);
    console.log('floatPart:', floatPart);
    // 方法一  数组api
    // return (intPart + '').split('').reverse().map((item, index) => index > 0 && index % 3 === 0 ? item + ',' : item).reverse().join('') + floatPart
    // 方法二  递归
    // if (intPart.length > 3) {
    //     return formatNum(intPart.substring(0, intPart.length - 3)) + ',' + intPart.substr(-3) + floatPart
    // }
    // return intPart + floatPart
    // 方法三  正则
    // console.log(intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,'))
    return intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,') + floatPart
}

console.log(formatNum(12345))
console.log(formatNum(12345678))
console.log(formatNum(12345678.987654))