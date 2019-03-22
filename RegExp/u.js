console.log(/^\uD83D/u.test('\uD83D\uDC2A')) // false
console.log(/^\uD83D/.test('\uD83D\uDC2A')) // true

var text = 'mom and dad and baby';
var reg = /mom( and dad( and baby)?)?/gi

var matches = reg.exec(text);
console.log(matches);

var matches2 = text.match(reg);
console.log(matches2)

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var pattern2 = /.at/g;

var m0 = pattern1.exec(text);
var m1 = pattern1.exec(text);
var m2 = pattern1.exec(text);

var m3 = pattern2.exec(text);
var m4 = pattern2.exec(text);
var m5 = pattern2.exec(text);

console.log(m0,m1,m2);
console.log(m3,m4,m5);

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if(pattern.test(text)){
    console.log("this pattern was matched")
}

console.log(typeof pattern.toString());
console.log(typeof pattern.toLocaleString());
console.log(typeof pattern.valueOf());