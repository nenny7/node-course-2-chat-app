var moment = require('moment');

// jan 1st 1970 00:00:00 am

//var date = new Date();
//var months = ['jan', 'Feb']
//console.log(date.getMonth());

//var date = moment();
//date.add(100, 'year').subtract(9, 'months');
//console.log(date.format('Do, MMM YYYY'));

// 10:35 am
// 6:01 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp)


var createdAt = 1234;
var date = moment();
console.log(date.format('h:mm a'))