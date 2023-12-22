// funtions in js 

function saymyname  ()  {
    console.log("h")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")

}
saymyname()
console.log(saymyname()) 

// both used to print , console bhi or variable ka naam or uske aage brackets 

function addnumbers (num1 , num2) {

    console.log(num1+num2)

}

addnumbers(4,7)

// function login (username){
//     return ` $[username] just login`
// }

function calculatecarprice(value1){

    return value1
}
 console.log(calculatecarprice(4))

//  what if calculatecarprice have more value than 4 

 console.log(calculatecarprice(4,122,4556))

//  it still print only first value not whole value 

//  to print all value we use spread method nd rest method (...value1) like below 


function calculatecarprices(...value6){

    return value6
}

console.log(calculatecarprices(4,456,787,425,676578,65))

const car =  {
    name : "bmw",
    price: "crs"

}

// function handleobject (anyobject){
console.log(`car name is ${car.name} and price is ${car.price}`)
