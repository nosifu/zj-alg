// 判断是否为靓号(连续4位以上重复或递增)
function isGoodMobile(num){
    const arr1 = Array.from({length:10}).map((item,index)=>''+index+index+index+index)
    const arr2 = Array.from({length:7}).map((item,index)=>''+index+(index+1)+(index+2)+(index+3))
    const all = arr1.concat(arr2)
    console.log('arr1:', arr1);
    console.log('arr2:', arr2);
    return all.findIndex(i=>num.indexOf(i)>-1)>-1

}

console.log(isGoodMobile('13755554678'))
console.log(isGoodMobile('13755524678'))
console.log(isGoodMobile('137525545678'))
console.log(isGoodMobile('1375255456678'))