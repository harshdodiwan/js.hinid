// objects in js 

// const mysym = symbol("key1")

//  this is object literals

const user = {

    // symbol is not defined

    // mysym : "mykey1",


    name: "harsh dodiwan",
    age: 20,
    email: "dodi@gmail.com",
    location: "delhi",
    isLoggedIn: "false",
    lastlogindays: ["monday", "friday"]

}

console.log(user.email)
console.log(user["email"])

// console.log(user.mysym)

user.email = "dodi@yahoo.com"

// to change the email just use equal to sign and change the value 

console.log(user.email)


// +++++++++++++++ object singleton +++++++++++++++++++++++++++


const tinderuser = Object()

tinderuser.id = "123acb"
tinderuser.name = "dodwan"
tinderuser.isLoggedIn = "false"

console.log(tinderuser)
console.log(tinderuser.table)




const blink = {

    email: "some@yahooo",
    fullname: {
        fullname: {
            firstname: "hasrh",
            secondname: "dodiwan"

        }

    }
}


console.log(blink.fullname)
console.log(blink.fullname.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// obj3 = {obj1,obj2}

obj4 =Object.assign(obj1,obj2)

obj5 = {...obj1,...obj2}

// we gonna use this mostly spread wali term 

// console.log(obj3)
console.log(obj4)
console.log(obj5)








 