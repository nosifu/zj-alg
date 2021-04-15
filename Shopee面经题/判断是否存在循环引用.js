const obj = {
    a: {
        name: 'a'
    }
}
obj.a.ref = obj

function hasCircularRef(obj){
    if(typeof(obj)!=='object') return false
    const set = new Set()
    let find = false
    const check=function(obj){
        if(set.has(obj)) {
            find = true
            // console.log('obj:', obj);
            return true
        }
        set.add(obj)
        for(const key in obj){
            if(obj.hasOwnProperty(key) && typeof(obj[key])==='object'){
                if(check(obj[key])){
                    return true
                }
            }
        }
    }
    check(obj)
    return find
}

const result = hasCircularRef(obj)
console.log('result:', result);