let {toString: s} = 123;
let {toString: bs} = true;
console.log(s===Number.prototype.toString)//true
console.log(bs===Boolean.prototype.toString)//true