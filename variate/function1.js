function add([x,y]){
    return x+y;
}

var a = add([1,2]);
console.log(a);

var val = [[1,2],[3,4]].map(([x,y])=>x+y)
console.log(val);

function move({x=0,y=0}={}){
    return [x,y];
}

var aa = move({x:3,y:8});
var bb = move({x:3});
var cc = move({});
var dd = move();

console.log(aa,bb,cc,dd);
//[3,8]
//[3,0]
//[0,0]

console.log([1,undefined,3].map((x='yes')=>x))
