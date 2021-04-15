// 函数式compose 支持多个参数
function compose(...funcs){
    if(funcs.length===0) return ()=>undefined
    if(funcs.length===1) return funcs[0]
    console.log('funcs:', funcs);
    // funcs.reverse()
    // return function(...args){
    //     let result = reverseFuncs[0](...args)
    //     for(let i=1;i<reverseFuncs.length;i++){
    //         result = reverseFuncs[i](result)
    //     }
    //     return result
    // }
    return function(...args){
        const firstResult = funcs[funcs.length-1](...args)
        console.log('firstResult:', firstResult);
        console.log('funcs.slice(0, funcs.length-1):', funcs.slice(0, funcs.length-1));
        return funcs.slice(0, funcs.length-1).reduceRight((prev, curr)=>{
            console.log('prev:', prev);
            console.log('curr:', curr);
            return curr(prev)
        }, firstResult)
    }

}
 
const greeting = (first, last) => `hello ${first} ${last}!`
const toUpper = str => str.toUpperCase()
const split = str => str.split(' ')
const fn = compose(split, toUpper, greeting)
console.log(fn('Shopee', 'Team'));
