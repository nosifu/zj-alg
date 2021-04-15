function Chain(){
    this.task = Promise.resolve()
    return this
}

Chain.prototype.eat = function(){
    this.task = this.task.then(()=>{
        console.log('eat')
    })
    return this
}

Chain.prototype.sleep = function(delay){
    this.task = this.task.then(()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('finish sleep ' + delay)
                resolve()
            }, delay * 1000)
        })
    }) 
    return this
}

Chain.prototype.work = function(){
    this.task = this.task.then(()=>{
        console.log('work')
    })
    return this
}

new Chain().eat().sleep(5).eat().sleep(6).work()