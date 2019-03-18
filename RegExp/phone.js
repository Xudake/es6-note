//010-89082344-0908

//010       -        89082344        -        0908
//[0-9]{4,5}   -     [1-9][0-9]{6,7} -        [0-9]{4,5}

var re = /^(0[0-9]{2,3}-)?[1-9][0-9]{6,7}(-[0-9]{1,5})?$/

var str = '010-8909789-1009';
var str2 = '110-8909789-1009';
var str3 = '010-8909789';
var str4 = '8909789';

console.log(re.test(str));
console.log(re.test(str2));
console.log(re.test(str3));
console.log(re.test(str4));
