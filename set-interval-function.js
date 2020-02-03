/*
Set Interval Function:
* Set timeout function calls a function each given millisecond.
*/

// Inside callback function will be called each two seconds.
setInterval(function () {
    console.log("It works each two seconds!")
}, 2000);

// For stop an interval function:
var count = 0;
var anotherIntervalFunc = setInterval(function () {
    if(count === 3)
        clearInterval(anotherIntervalFunc);

    console.log(count);
    count++;
}, 1000);
