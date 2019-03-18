var str = 'apc bpc cpc dpc acpc abpc';

var re = /[abc]pc/g
console.log(str.match(re));

var str2 = '123dkjlkasdjfjkl34 sfhak44 55sfdhkashjASDD';

var re2 = /[0-9]+/g;
var re3 = /\d+/g;
console.log(str2.match(re2));
console.log(str2.match(re3));

var re4 = /[^0-9]+/g;
console.log(str2.match(re4));

var re4 = /[^a-z]+/g;
console.log(str2.match(re4));