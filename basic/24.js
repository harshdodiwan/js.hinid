// IIFE (immediately invoked funtion expression)
// means executes instantly after the writing the funtion 

// global scope ke pollution se problem hoti h kayi baar toh us global scope ke variable ke pollution ko htane ke liye iife use kia h 

// this is name iifi h bciz iska naam h 


(function chai(){
    console.log(`harsh dodiwan`);
} ) ();

//  or ye unname iifi 

(  () => {
    console.log(`huhfib`)
}) ()  