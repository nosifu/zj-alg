// promise
Chain().eat().sleep(5).eat().sleep(6).work()

function Chain(){
    this.task = Promise.resolve()
    this.eat = function(){
        this.task = this.task.then(()=>{
            console.log('eat')
        })
        return this
    }
    this.sleep = function(delay){
        this.task = this.task.then(()=>{
            return new Promise(resolve=>{
                console.log('start sleep')
                setTimeout(()=>{
                    console.log('finish sleep')
                    resolve()
                }, delay * 1000)
            })
        })
        return this
    }
    this.work = function(){
        this.task = this.task.then(()=>{
            console.log('work')
        })
        return this
    }
    return this
}