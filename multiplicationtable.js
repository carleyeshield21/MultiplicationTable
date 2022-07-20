// This is the link to this JavaSCript Coding Challenge
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function(size) {
    let newarr = Array(size).fill([])
    let arr = []
    for(i=1; i<=size; i++){
        let j = 1
        while(j<=size){
            // console.log(i,j)
            arr.push(i*j)
            j++
        }
    }
    // console.log(arr)
    let j = 1
    while(j<=size){
        console.log(arr.splice(0,size))
        j++
    }    
}
multiplicationTable(9)