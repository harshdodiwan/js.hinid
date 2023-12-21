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
console.log(blink.fullname.secondname)






