//  topic = memory 
// two types of memory 
// stack and heap 

// value return ( stack) use in all pimitive data types == String, boolean , number , null , undefined , symbol these all are primitive data types 

// and 

//  originla reference return (heap) use in all non primitive data types = array , objects , functions 

let myyoutube = "harshcr7"
let anothername = myyoutube

anothername = "messi"

console.log (myyoutube)
console.log (anothername)

let user1= {
    email : "harsh@gmail.com",
    password :"gyguhybl"
}

let user2 = user1

 user2 = {
    email: "dodi@com", 
    password :"789"
}
 
console.log (user1)
console.log(user2)