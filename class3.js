const arr = [1, 3, 4, 5, 6, 7, 8, 9];

let person = [];
const a = {
    name:"John",
    address:"US",
    number:12343654,
    info:function() {
         alert("return from function");
    }
};

person.push(a);
console.log(person)
for(let i = 0; i < person.length;i++) {
    // person[i].info();
}

// console.log(a.name);
// console.log(a.number);
// for(let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
//     if(i == 2) {
//         arr[i] = 10 ;
//         break;
//     }
// }
// const value1 = parseInt(prompt("enter value a"));
// const value2 = parseInt(prompt("enter value b"));

function calc(a ,  b) {
    return a + b;
}

const total = calc(20,50);
console.log(total);

function test () {
    this.value = 23;
}


const t = new test();
console.log(t.value);

function rObject() {
    return {
        calc:function(a, b) {
            return a + b;
        },
        
        sub:function( a, b) {
            return a - b;
        }
    }
}
console.log(rObject())

const r = new rObject();
console.log(r.calc(8, 58));
console.log(r.sub(8, 58));



