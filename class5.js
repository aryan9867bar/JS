const list = document.getElementById("list");
console.log(list);


function showMessage(msg){
    if(msg) {
        console.log(msg);
    } else {
        const e = new Error("value is not passed");
        console.error(e)
        // throw("No value found")
    }   
}

function add(a, b) {
    try {
     
    } catch(e) {
        console.log|(e);
    } finally {
        console.log("fkjkfjs")
    }
}

// add(12, 13);
// showMessage();
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({user:"john", password:"timelapes"});
        reject("something went wrong");
    },2000)
});



// console.log("line1")
    // p.then(response => {
    //     console.log(response);
    // }, error=> {
    //     console.error(error);
    // })

// console.log("line 3");

function getValue(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id) {
                resolve("Value resolved");
            } else {
                reject("No params found");
            }
        },2000)
    })
}

getValue(1).then(res => {
    console.log(res);
}, err=> {
    console.error(err);
});

function fetchData() {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(response => {
        console.log(response);
        renderData(response);   
    });
}

fetchData();



function renderData(response) {
  
    for(let i = 0; i < response.length; i++) {
        const v = document.createElement("li");
        v.innerHTML = response[i].title;
        v.style.height="30px";
        v.style.backgroundColor="#0f81d2";
        v.style.color="#fff";
        v.style.padding="20px";
        v.style.borderRadius="20px";
        v.style.marginBottom="5px";
        list.appendChild(v);
    }
    document.body.innerHTML = v;
    
}






