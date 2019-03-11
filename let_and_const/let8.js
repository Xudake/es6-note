var tem = new Date();

function f(){
    console.log(tem);
    if(false){
        // var tem = 'hello world';
        let tem = 'hello world';
    }
}

f();


function fun1(){
    let n = 5;
    if(true){
        // var n = 10;
        // n = 10;
        // let n = 10;
    }

    console.log(n);
}

fun1();