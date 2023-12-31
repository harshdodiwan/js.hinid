// java execution context

// 1== global execution context
// 2== function execution context
// 3= eval execution context


// control flow in javascript - if -else command, 


const temperature =90
if(temperature<60){
    console.log("temperatureis less than 50")
}
else{
    console.log("temperature is less")
}

// talk about scope 
// agr let use krenge toh fly do bar print nhi hoga mtlb scope ke andar hi rhega agr 
// but agr VAR use krnege ko ye allow krta h scope ke bhar bhi or value print ho jaygei fly

// const score = 299

// if(score<300){
//     let power = "fly"
//     console.log(power)
// }

// console.log(power)

const score = 299

if(score<300){
    var power = "fly"
    console.log(power)
}

console.log(power)

const userloogedin = true
const card = true
if( userloogedin && card ){
    console.log("allowed to by stuff")
}


// +++++++++++++ switch case +++++++++++++++++++++++++++++++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("jan")
        break;
        case 2:
            console.log("feb")
            break;
            case 3:
                console.log("mar")
                break;
                case 4:
                    console.log("apr")
                    break;

    default:
        console.log("jaa na ")
        break;
}


// what if value is string "4"


const week = "wed"

switch (week) {
    case "monday":
        console.log("mon")
        break;
        case "tuesday":
            console.log("tue")
            break;
            case "wed":
                console.log("wed")
                break;
                case "thurs":
                    console.log("thur")
                    break;

    default:
        console.log("jaa na ")
        break;
}



// falsy values === false, 0, NAN (NOT A NUMBER ), -0 ,BIGNINT , NULL , undefined , ""(EMPTY STRINGS )
// TRUE VALUES == 
// string ke andar agr koi value h toh wo true value h 
//  TRUE , 1 , [] , " ", "0" "false", 

// ++++++++++++++++++++++ nullish coalescing operator  +++++++++++++++++++++++++++++++++/   null or undefined 
// null h toh null assign krlo , undefied h toh undefined assign krlo 

let val ;
// val = 5 ?? 10  aage vali value lega obviously 
// val = null ?? 10   bhar vali value lega 
// val = undefined ?? 20  same bhar vali value lega 
// val = null ?? 40 ?? 50 null ke baad jo value aaengi 
console.log(val)


// +++++++++++++++++++++ terniary operator +++++++++++++++++++++++++

// syntax ==      condition ? true : false 
 
const  price = 100
price >= 120 ? console.log("correct price") : console.log("wrong price")
