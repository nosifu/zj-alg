/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = []
    this.mins = []
    this.top=() =>{
        return this.data[this.data.length-1]
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x)
    if(!this.mins.length || this.mins[this.mins.length-1]>=x){
        this.mins.push(x)
        console.log(x, 'this.mins:', this.mins, this.data)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popValue = this.data.pop()
    if(this.mins[this.mins.length-1] == popValue) {
        this.mins.pop()
    }
    return popValue
};

/**
 * @return {number}
 */
MinStack.prototype.top2 = function() {
    return this.data[this.data.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.mins[this.mins.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min())
minStack.pop();
console.log(minStack.top())
console.log(minStack.min())

