function f(){
    console.log('i am outside');
}

(function(){
    if(false){
        function f(){
            console.log('i am inside');
        }
    }

    f();
})()


// es6环境结果：TypeError: f is not a function

// 360浏览器返回结果：  i am inside