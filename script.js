// selector

// ===========================id

// document.getElementById("head").innerHTML = "<i>bye bye rohan</i>"

// var head = document.getElementById("head")
// head.innerText = "bye bye"


// =========================class = > array of items
// var paras = document.getElementsByClassName("para")
// console.log(paras);


// ==========================tagname

// var p = document.getElementsByTagName("p")
// console.log(p);



// query selectors =>  single item / first appearance

// var head = document.querySelector("h1")

// var para = document.querySelector(".para")




// query selector all  = > array of items
// var para = document.querySelectorAll(".para")
// var head= document.querySelectorAll("#head")






// var head =  document.getElementById("head")

// text / html


// get 

// console.log(head.innerText)
// console.log(head.innerHTML)


//  set

// head.innerText = "bye bye <i>world </i>"
// head.innerHTML = "bye bye <i>world </i>"




// style / css

// get
// console.log(head.style)


// head.style = "font-size : 48px; color:tomato ; "




// var head =  document.getElementById("head")


// access class list

// console.log(head.classList)


// add class
// head.classList.add("title")

// remove class
// head.classList.remove("newClass")



// manipulate attributes

// var link = document.getElementById("go")
// console.log(link.attributes.href)

// set attribute
// link.setAttribute("href","https://www.yahoo.com")



// add event listener


var head =  document.getElementById("head")


// anonymous function
// head.addEventListener("click", function(){
//     head.innerText = "bye bye world"
//     alert("hello world i got clicked")
// })


// => arrow function
// head.addEventListener("click", ()=>{
//     head.innerText = "bye bye world"
//     alert("hello world i got clicked")
// })
head.addEventListener("mouseout", ()=>{
    head.innerText = "bye bye world"
    alert("hello world i got clicked")
})
