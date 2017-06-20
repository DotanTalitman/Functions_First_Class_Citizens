
//assign function as param
const log = console.log;

//function declaration
function foo() {

    log("foo")
}

//function expression
var foo2 = function () {
    log("foo2")
}

// return a gunction 
function foo3(){
    return foo2;
}



// because of clause we can use it as 'partial application' 
function add(x) {
    return function(y) {
        return x + y;
    }   
}

//get function as param in a function
function callFoo(fn){
    fn();
}


//yea! function is an objcet
foo.color="red"; 


foo(); // print: foo

foo2(); //print: foo2

var foo4=foo3();

foo4();//print: foo2

log(add(5)(1)) ; // print : 6

callFoo(foo4);// print: foo2

log("function is an objcet and the color is",foo.color);
//print: function is an objcet and the color is red