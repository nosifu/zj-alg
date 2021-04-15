// 回调数组
function Chain(){
    this.tasks = []
    setTimeout(()=>{
        console.log('开始执行')
        let task = function(callback){
            callback && callback()
        }
        while(this.tasks.length){
            const nextTask = this.tasks.pop()
            const preTask = task
            task = function(){
                nextTask(preTask)
            }
        }
        task()
    }, 0)
    return this
}
Chain.prototype.eat = function(){
    this.tasks.push((callback)=>{
        console.log('eat')
        if(callback){
            callback()
        }
    })
    return this
}
Chain.prototype.sleep = function(delay){
    this.tasks.push((callback)=>{
        console.log('start sleep ' + delay)
        setTimeout(()=>{
            console.log('finish sleep ' + delay)
            if(callback){
                callback()
            }
        }, delay * 1000)
    })
    return this
}
Chain.prototype.work = function(){
    this.tasks.push((callback)=>{
        console.log('work')
        if(callback){
            callback()
        }
    })
    return this
}
Chain().eat().sleep(3).eat().sleep(6).work().work().sleep(1).work().eat()