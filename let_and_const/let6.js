function func1(){
    let a = 1;
    // var a = 2; //SyntaxError: Identifier 'a' has already been declared
}

func1();

function func2() {
    let a = 1;
    // let a = 2;
}

func2()


function func3(arg){
    let arg;
}

// func3();

function func4(arg) {
    {
        let arg;
    }
}

func4();