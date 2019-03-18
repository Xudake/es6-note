var str = 'hhakfhashfkj123  12wqlersdf3 344jsadf3423  42  34';

var re = /\d/;
console.log(str.match(re));

var re2 = /\d/g;
console.log(str.match(re2));

var re3 = /\d\d/g;
console.log(str.match(re3));


// + 一个或多个
var re4 = /\d+/g;
console.log(str.match(re4));