// (function(){
//     alert("self function")
// })();

// const sum = function(a, b) {
//     return a +b;
// }


// function add(a , b, callback) {
//     const t = a + b;
//     callback(t);
// }kkjh

// add(23, 20, function(r) {
//     console.log(r);
// });

function askme(q, yes, no){
    if(confirm(q)) {
        yes();
    } else {
        no()
    }
} 


askme("Do you want to close me?", () =>{
    alert("Yes! close it");
}, () {
    alert("No! dont do it");
})

const showMessage = () => {
    alert("show something!")
}

const add = a => {
    return a + 100;
}

const sub = (a, b) => {
    return 
} 

const multiply = (a , b) => a * b;

function rObject() {
    return {
        calc:(a, b) => a + b,
        
        sub:( a, b) => a - b
    }
}

const r = new rObject();
console.log(r);
console.log(add(50));
console.log(sub(50, 20))
console.log(multiply(50, 50));



