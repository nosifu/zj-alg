// 普通方法
// 不用promise等
Chain().eat().sleep(5).eat().sleep(6).work()

function Chain(){
    this.totalDelay = 0
    this.eat = function(){
        setTimeout(()=>{
            console.log('eat')
        }, this.totalDelay)
        return this
    }
    this.sleep = function(delay){
        setTimeout(()=>{
            console.log('sleep start')
        }, this.totalDelay)
        this.totalDelay += delay * 1000
        setTimeout(()=>{
            console.log('sleep finish')
        }, this.totalDelay)
        return this
    }
    this.work = function(){
        setTimeout(()=>{
            console.log('work')
        }, this.totalDelay)
        return this
    }
    return this
}