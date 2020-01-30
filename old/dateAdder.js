// Create a function add that takes a date and diff and returns a new date with diff added to the original date.

// date is a Date object.
// diff is a string representing the amount of time to add to date
// diff is a number followed by an operator
// e.g. 10d would add ten days
// operator	definition
// s	seconds
// m	minutes
// h	hours
// d	days
// w	weeks
// M	months
// y	years

// //function to convert Unix Epoch back to human view
// function getDateTimeFromTimestamp(unixTimeStamp) {
//     var date = new Date(unixTimeStamp);
//     return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
    
// }

const d = new Date();
const n = d.getTime();

console.log(d + ' is current timestamp')
let time = (string) => {

   const multiplier =  string.slice(0, -1)
   const timeUnit = string.slice(-1)
   let myMap = new Map;
   myMap.set("s",1000),
   myMap.set("m",60000),
   myMap.set("h",(60 * 60000)),
   myMap.set("d",(24 * 60 * 60000))
   myMap.set("w",(7 * 24 * 60 * 60000))
    
   let milliseconds = (myMap.get(timeUnit))
   let timeToAdd = +multiplier * +milliseconds
   let convertME = (timeToAdd + n);
   console.log(timeToAdd + ' is the timeToAdd')
//    return getDateTimeFromTimestamp(convertME);
return new Date(convertME);
};
console.log('the new time is ' + time('20d'))


