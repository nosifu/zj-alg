function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

ListNode.prototype.toArray = function() {
    let arr = []
    let temp = this
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    return arr
}

ListNode.prototype.toString = function() {
    return this.toArray().join(',')
}

function getListFromArray(arr) {
    if (arr.length === 0) {
        this.val = 0
        this.next = null
        return null
    }
    const head = new ListNode(arr[0])
    let prev = head
    arr.forEach((item, index) => {
        if(index>0){
            temp = new ListNode(item)
            prev.next = temp
            prev = temp
        }
    })
    return head
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    
};

const list = getListFromArray([6, 3, 5, 9, 13, 7, 14, 4, 2, 12, 8, 1, 10, 0, 11])
console.log('list:', list);
console.log(list.toArray())
console.log(list+'')

