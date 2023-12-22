// global and scope 


let a = 45
const b = 455
var c = 343

// console.log(a)
// console.log(b)
// console.log(c)

// if (true){
    
// let a = 45
// const b = 455
// var c = 343

// }

// {
//     jo bhi iske andr likha hua h use block scope khte h 
//     basically  block scope {}  ise kehte h 
// }
// }

// global scope == outside the block scope is global 

var d = 556

if (true){
    
    let a = 45
    const b = 455
    var c = 343
    var d = 679876
}
// console.log(d)

// why it is print d value of scope 679876
// not global value 556
// let see why 
// jo vlaue globla scope m hoti h wo block sco[e m avialable hoti h but ]
// block scope jo value likhte h woh bhar nhi jani chahiye 

let f = 10

if (true){
   let g = 440
   let f = 567
}
console.log(f)


// agr var lega datatype
// scope m bhi var dalega toh vlaue blocl scope wali aaengi
// or agr 
// let lega toh value global scope wali aaengi
// 10........


// +++++++++++++  nested scope   +++++++++++++++++++++

function one (){
   let user= "harsh"

    function two(){
      let age = "20"
        console.log(user)
    }
    console.log(age)
 
    two()

}


