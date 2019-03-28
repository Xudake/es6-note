console.log(Number.isFinite(123));//true
console.log(Number.isFinite(-8));//true
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(Infinity));//false
console.log(Number.isFinite(-Infinity));//false
console.log(Number.isFinite('foo'));//false
console.log(Number.isFinite('15'));//false
console.log(Number.isFinite(true));//false



console.log(isFinite('25'));//true
console.log(Number.isFinite('25'));//false
console.log(isFinite(25));//true
console.log(Number.isFinite(25));//true
