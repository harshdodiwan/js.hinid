// arrow function in js

const user = {
    username :"harsh",
    price : "979",

    welcome : function(){
        
        // console.log(`this is ${this.username}, welcome to website`)
        // console.log(this)
}

}


// user.welcome()
// user.username="sam"

// console.log(this)


function  chai ()  {
    let car = "mercedes"
    // console.log(this.car)

}
chai()

// jb hum THIS ko kisi funtion ke andar print krte h kisi node environment ke andae toh kaafi value aati h global value, clearimmediate or bhut bhut kuch 


// ++++++++++++++++++++ arrow function +++++++++++++++++++++++++

// tihs is arrow function (=>) 

const arrow = ()=>{
    let bike = "bmw"
    console.log(this)
}

arrow()

// isme sirf this print krne se empty parenthesis output aa ri h 

// conclusion == regular function m this() ki kuch value aati h gloval,clearimediate or bhi bhit kuvh
// or arrow function m this function used hota h or show krta h parenthesis 


// arrow function syntax          ==              () => {} 


const addtwo =(num1,num2) =>{
    return (num1+num2)
}

console.log(addtwo(4,6))

// in arrow function  
// 1- implicit return === jb hum only parethesis use krte h not return
// 2- explicit return === jb hum return keyword use krte h 


const sum =(num1,num2) => (num1+num2)
console.log(sum(5,67))

// ye h implicit arrow funtion 