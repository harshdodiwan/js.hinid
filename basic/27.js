// loops ( iterations )

// for loops 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is best number")
        
    }
    // console.log(element)
    
}

for (let a = 0; a <10 ; a++ ) {
    const element = a;

    for (let b = 0; b < 10 ; b++) {
        const element = b ;
    

        // console.log(a+'*'+ b+'='+ a*b)
        
    }
}


// ++++++++++++ break and continue +++++++++++++++++++++++

for (let index = 0; index <= 10 ; index++) {
  
    // console.log(index)
}

//   for break 

for (let index = 0; index <= 10 ; index++) {
  if (index==5) {
  console.log('5 detected');
    break;   
}
    console.log(index)
}

//  for continue  

for (let index = 0; index <= 10 ; index++) {
  if (index==5) {
  console.log('5 detected');
    continue;   
}
    console.log(index)
}


// +++++++++++++++ while loops +++++++++++++++

let index = 0
while (index < 10) {
    console.log(`vaalue of index is ${index}`)
    index = index +3
    
}

let hero =["batman" ,"raone", "gone"]

let arr = 0 
while (arr < hero.length) {

    console.log(hero[arr])
    arr = arr + 1
    
}


let score = 0
do {
    console.log(score)
    score ++
} while (score < 10);