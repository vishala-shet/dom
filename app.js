// // var value=document.all;

// // value = document.doctype;
// // value=document.domain;

// // value=document.characterset;

// // value=document.contentType;

// // value=document.charset;

// // value=document.bgColor;


// // value=document.URL;

// // value=document.addEventListener;

// // value=document.anchors;

// // value=document.createElement;
// // console.log(value)

// // value=document.forms;


// // value=document.images;

// // value=document.links;

// // value=document.body;

// // value=document.head;

// var image= document.images;
// console.log(image);

// [...image].forEach(x=>
//     {
//         // x.classList.add('images',"image1")//adding class to html element
//         // x.id="images"//adding id to html element.
//         x.classList.remove();// removing class from html element
//         var aattribute=x.getAttribute('src')//getattributes from element
//         console.log(aattribute);
//         var att=x.setAttribute("title","allimages")//creating new attribute
//         console.log(att)

//     });//not an aaraay so it will not work so we convert into array
// //[...image].map(x=>console.log(x))//map should convert into array

// // for(let x of image){
// //     console.log(x)
// // }  for of loop

//  for(var i=0;i <image.length;i++){
//      console.log(image[i]);
// } //traditional for loop

// var links=document.links;
// console.log(links);

// [...links].forEach(x=>{
// x.classList.add("class","link");
// x.style.background="red";
// x.style.color="white";
// x.style.padding="10px";
// x.style.border="none";
// x.style.borderRadius="4px";
// })


// //DOM methods
// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("");

// var ul = document.getElementById("ul"); //id
// var li = document.getElementsByClassName("li"); //class
// var tag = document.getElementsByTagName('a');
// console.log(ul);
// [...li].map(x => console.log(x));
// [...tag].map(y => console.log(y));
// console.log(li);
  

//One method of connecting with html
// let ul = document.getElementById("ul");
// let lis = ul.getElementsByTagName("li");
// [...lis].map(li => {
//     li.style.background = "#eee";
//     li.style.padding = "10px";
//     li.style.color = "#111";
//     li.style.border = "1px solid #111";
//     li.style.marginBottom = "10px";
//     li.style.listStyle = "none";
// });

//Another modern way of connecting with html  //modern way of manipulating dom element
// let ul = document.querySelector("#ul"); //just like css selector
// //let li = document.querySelector(".li-list");
// let liFirst = document.querySelectorAll(".li-list:first-child");
// let liLast = document.querySelectorAll(".li-list:last-child");
// let nthChild = document.querySelectorAll(".li-list:nth-child(3)");
// liLast.forEach(x => {
//     x.style.background = "green";
//     x.style.padding = "10px";
//     x.style.color = "#111";
//     x.style.border = "1px solid #111";
//     x.style.marginBottom = "10px";
//     x.style.listStyle = "none";
//     x.style.color="white";
// });
// liFirst.forEach(x => {
//     x.style.background = "orange";
//     x.style.padding = "10px";
//     x.style.color = "#111";
//     x.style.border = "1px solid #111";
//     x.style.marginBottom = "10px";
//     x.style.listStyle = "none";
//     x.style.color="red";
// });
// nthChild.forEach(x => {
//     x.style.background = "blue";
//     x.style.padding = "10px";
//     x.style.color = "#111";
//     x.style.border = "1px solid #111";
//     x.style.marginBottom = "10px";
//     x.style.listStyle = "none";
//     x.style.color="red";
// });

// console.log(ul);
// //console.log(li);


let liOdd = document.querySelectorAll("ul li:nth-child(odd)");
let liEven = document.querySelectorAll("ul li:nth-child(even)");

liOdd.forEach(odd =>{
    odd.classList.add("odd");
    odd.textContent = "odd here";
});
liEven.forEach(even =>{
    even.classList.add("even");
    even.textContent = "even here";
});