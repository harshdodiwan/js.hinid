// high oder array loops

// for of 

const arr = [1,2,3,4]

for (const key of arr) {
    // console.log(key)
    
}

const greet = "good morning"

for (const wish of greet) {
    // console.log(wish)
    
}

// ++++++++++++ map +++++++++++++++++ 

// maps are pairs of key value 
// and remember the original insertion of the order of the keys 
// they have no duplicate value 
// only unique values 

const map = new Map ()
map.set('in', "india");
map.set('la', "los angelas");
map.set('fr', "france");
map.set('ny', "new york");

// console.log(map)

// WE USE HERE FOR OF LOOP 

for (const key of map) {
    // console.log(key, )
}

// then you will see that the keys value are come in 
// array type 

// to solvet this we ise [key, value] term in for of loop to 
// get proper key value type 


for (const [key,value] of map) {
// console.log(key, `=` ,value)

}

// can we use object in for loop and map 
// ans is no we cant use bcoz object is not iterable

// in this we use forin loop  


// ++++++++++++++++++++++++++++forin loop++++++++++++++

const object = {
    js : 'javascript',
    cpp: 'c++',
    rb:  'ruby',
    py : 'python'

}


for (const key in object) {
//   console.log(key);
} 

for (const key in object) {
//   console.log(object[key]);
}

for (const key in object) {
    console.log(key ,`=`,object[key] )
   
}


//  for each loop 

// filter operation - ek callback function milega jisme each key, value access kia jayega 
// fir hum condition denge jo value consition ko satisfies krengi wo value return hongi 
//  humne isme this arrow function  use kia h (=> )

const num = [1,2,3,4,5,6,7,8,9,10]
// const newnum = num.filter( (num) => num > 4)
// console.log(newnum)


// we use foreach for this code 

const  newnum=  []
num.forEach((num) => {
    if (num>4) {
        newnum.push(num)    
    }    
})
console.log(newnum)

const book =[
    {
        title: 'book one', genre : 'fiction', edition : '2003'

    },
    {
        title: 'book two', genre : 'action', edition : '2004'
        
    },
    {
        title: 'book third', genre : 'fiction', edition : '2003'
        
    },
    {
        title: 'book fourth', genre : 'romance', edition : '2005'
        
    },
    {
        title: 'book fifth', genre : 'action', edition : '2003'
        
    },
    {
        title: 'book sixth', genre : 'romance', edition : '2004'
        
    },
    {
        title: 'book seven', genre : 'fiction', edition : '2005'
        
    }

]

// const userbok = book.filter( (bk) => (bk.genre === 'action'))
  userbooks = book.filter((bk)=>(bk.edition ==='2004'))
console.log(userbooks)

