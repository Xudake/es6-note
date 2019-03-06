// 暂时性死区
let  a = 123;
if(true){
    console.log(a);
}

{
    // console.log(a); //ReferenceError a is not defined
    let a;
}

function bar(x=y,y=2){
    return [x,y];
}
console.log(bar());