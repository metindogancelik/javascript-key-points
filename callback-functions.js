/*
Callback Functions:
* Javascript is an asynchronous language (event driven).
* Therefore callback functions used when synchronous instructions requires.
*/

// So second function (callback function) runs after first function's executing end. (synchronous)
function firstFunc(input, callback){
    console.log(input);
    callback();
}

// This function is called as callback function.
function secondFunc(){
    console.log("Callback function works!");
}

// Second function is callback function.
firstFunc("First instruction.", secondFunc);