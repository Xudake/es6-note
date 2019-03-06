var a = [];
for(var i=0;i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}

a[6](); // 10

var b = [];
for(let i=0;i<10;i++){
    b[i] = function() {
        console.log(i);
    }
}

b[0]()

/* 
    for循环体是一部分
    for循环内部是一个独立的作用域
 */
for(let i=0;i<3;i++){
    let i = 'test';
    console.log(i);
}