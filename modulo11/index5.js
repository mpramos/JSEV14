
function outerFunciton() {
    let count=0
    function innnerFunction() {
        count ++
        return count
    }
    return innnerFunction
}
const innerF= outerFunciton()
console.log(innerF());//1
console.log(innerF());//2
console.log(innerF());//3
console.log(innerF());
