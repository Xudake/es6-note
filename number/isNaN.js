console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(15));//false
console.log(Number.isNaN('15'));//false
console.log(Number.isNaN('a'));//false
console.log(Number.isNaN('a'/0)); 
//true
console.log(Number.isNaN('a'/'a'));
//ture
console.log(Number.isNaN(1/NaN));
//ture

console.log(isNaN(NaN));
console.log(isNaN('N'));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('N'));
console.log(isNaN(1));
console.log(Number.isNaN(1));


