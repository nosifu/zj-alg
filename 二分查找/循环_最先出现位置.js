let arr
// arr = Array.from({length:200}).map(i=>Math.round(Math.random()*99+1)).sort((a,b)=>a-b)
//            0  1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19
arr = [ 1,2,2,2,2,4,4,4,5,6,6,7,8,8,10,10,10,10,11,11,12,12,12,12,13,13,13,13,15,15,16,
    17,17,17,18,18,19,19,19,20,21,21,21,21,21,22,22,23,24,25,26,26,27,28,28,28,29,30,30,31,33,
    33,33,34,34,35,35,35,36,36,36,37,40,40,40,40,41,41,44,45,45,45,46,46,47,47,47,48,49,49,50,
    50,50,51,51,54,54,55,55,56,56,57,57,58,58,58,58,59,60,60,62,63,63,63,64,64,64,64,64,65,65,
    67,67,68,68,68,68,69,69,69,71,71,71,71,72,72,72,73,73,74,74,75,75,75,76,76,77,77,78,78,78,
    79,79,80,81,83,83,84,84,85,86,86,86,87,87,88,88,88,89,89,89,89,90,90,91,91,91,91,92,92,93,
    93,94,94,94,94,95,96,96,97,97,97,98,99,99,99,99,99,100,100 ]
console.log(arr.indexOf(47))
console.log('arr:', arr.join(','));

// 找到target的下标，已确定精确存在
function binarySearch(target){
    console.log('typeof(target):', typeof(target));
    let i=0, j=arr.length
    let trys = 0
    while(i<j){
        const mid = Math.floor((i+j)/2)
        console.log('mid:', mid);
        if(arr[mid]<=target){
            i = mid + 1
        } else {
            j = mid
        }
        if(trys++ > 100) {
            console.log(target+'的循环次数超过100~~~~~~~~', i, j)
            break
        }
    }
    const result = i - 1
    console.log('target='+target, arr.lastIndexOf(target), result, result===arr.lastIndexOf(target));
    return trys
}

// arr = [2]
// for( let i in arr){
for( let i in Array.from({length:100})){
    console.log(i, binarySearch(arr[i]))
    // console.log(i, binarySearch(parseInt(i)))
}
// console.log(2, binarySearch(2))
// console.log(7, binarySearch(7))
// console.log(27, binarySearch(27))
// console.log(binarySearch(52))
// console.log(binarySearch(18))