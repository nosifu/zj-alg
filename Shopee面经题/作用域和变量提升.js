// 作用域和变量提升
var a, b
(function () {
    console.log(a);
    console.log(b);
    var a = (b = 3);
    console.log(a);
    console.log(b);
})()
console.log(a);
console.log(b);
/*
正确输出顺序：
undefined
undefined
3
3
undefined
3
*/