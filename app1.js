// var btn  = document.getElementById("btn")*;
// var btn1 = document.getElementById("btn1");
// // console.log(btn);
// var template1 = document.getElementById('template');
// btn.addEventListener("click", () =>{
//     template1.style.display = 'block';
//     template2.style.display = "none";
//     template1.innerHTML = `
//     <h1>Template 1</h1>
//     `
// });
// var template2 = document.getElementById('template1');
// btn1.addEventListener("click", () =>{
//     template1.style.display = 'none';
//     template2.style.display = "block";
//     template2.innerHTML = `
//     <h1>Template 2</h1>
//     `
// });
// btn.addEventListener('click', e =>{
//     console.log(e);
// });  //mouse event 

// var search = document.getElementById('search');
// search.addEventListener('keyup', (e) => {
//     console.log(e.target.value);
// })   //keyboard event

// var form = document.querySelector('#form');
// form.addEventListener('submit',e => {
//     e.preventDefault()
//     console.log(form.username.value);
// });

// var username = "shashi";
// setTimeout(() =>{
//     console.log("ajax here...async");
// },10000);
// var company =  "Qspiders";
// console.log('test')
// console.log(username);
// console.log(company);

//promises here
var mypromise = new Promise((resolve,reject) =>{
    setInterval(()=>{
        resolve('hello resolve here');
    },1000); //second executes bcz of time

    setInterval(()=>{
        reject('hello reject here');
    },500); //first executes bcz of time
});
mypromise.then(data=>{console.log(data);}).catch(err => console.log(err));


var promise1 = new Promise((resolve,reject)=>{
    resolve('promise 1 here');
})
var promise2 = new Promise((resolve,reject)=>{
    resolve('promise 2 is rejected here');
});
var promise3 = new Promise((resolve,reject)=>{
    resolve('promise 1 here');
});
var promise4 = new Promise((resolve,reject)=>{
    reject('promise 4 here rejected for network problem');
});
Promise.all([promise1,promise2,promise3,promise4])  //all wl check all promises
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));


//race method
var promise1 = new Promise((resolve,reject)=>{
    resolve('promise 1 here');
})
var promise2 = new Promise((resolve,reject)=>{
    resolve('promise 2 is rejected here');
});
var promise3 = new Promise((resolve,reject)=>{
    resolve('promise 1 here');
});
var promise4 = new Promise((resolve,reject)=>{
    reject('promise 4 here rejected for network problem');
});
Promise.race([promise1,promise2,promise3,promise4])  //all wl check all promises
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));


