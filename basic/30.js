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
