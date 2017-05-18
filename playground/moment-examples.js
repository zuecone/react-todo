var moment = require('moment')

console.log(moment().format());

//January 1st 1970 @ 12:00am -> 0
//January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1495131223;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format('DD-MM-YYYY'));
console.log('currentMoment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
