let s = 'hello world';

var a = s.startsWith('hello');
var b = s.endsWith('d');
var c = s.includes('o');
var d = s.indexOf('o');
console.log(a,b,c,d);
// true true true 4

var e = s.startsWith('world',6);
var f = s.endsWith('o',5);
var g = s.includes('llo',5);
var h = s.indexOf('o',5);
console.log(e,f,g,h);
//true true false 7