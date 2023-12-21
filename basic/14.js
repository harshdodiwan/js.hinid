// array in js 


let arr = [0,2,4,5,6]
console.log(arr[4])


// let x = 10
// console.log(x++)
// console.log(++x)
// console.log(x)


// array methods===   push , pop (only last value will be deleted ) , unshift ( value add hogi starting m )
// shift  =  aage ki value delete ho jayegi 
// include to check the value is there or not 
// agr value nhi h toh arr m index find krte waqt toh value -1 m aayegi
// slice and splice examples dekh neeche last value considered nhihoti slice m 
// but lsst raneg consider hoti h splice m 

// splice m hota ye h ki splice m se slice portion delete ho jate h . 
// or fir originial arr print ho jata h 

 arr.push(10)
console.log(arr)

arr.pop(2)
console.log(arr)

arr.unshift(2)
console.log(arr)

arr.unshift(9)
console.log(arr)

arr.shift()
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(8))
console.log(arr.indexOf(5))
console.log(arr.indexOf(2))

console.log(arr.indexOf(234))


let mynarr = [1,2,4,5,6,7,8,89,0,67,54]
console.log(mynarr.slice(1,5))


let myarr = [1,2,4,5,6,7,8,89,0,67,54]
console.log(mynarr.slice(1,5))

console.log(myarr.splice(1,5))















