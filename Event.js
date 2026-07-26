// let button=document.querySelector("btn")
// btn.onclick =() =>{
//     console.log("i was clicked by you")

// }
// btn.onclick =(e) =>{
//     console.log(e); // we use (e) to see event.type .event.target from inspect mode
//     console.log(e.type);   // we can access type/targert dirctly form JS.
//     console.log(e.clientX,e.clientY); //clientX,clientY use for see location on our page . it ismost probably used in games developement.
//     console.log("i was clicked by you")

// }
let div=document.querySelector("div")
div.onmouseover=()=>{
    console.log("Hello world")
}
let button=document.querySelector("#btn")
let mode="Dark"
button.onclick=()=>{
    console.log("You are trying to change mode")
    if(mode==="Dark")
{
    mode="Light";
    let boody=document.querySelector("body").style.backgroundColor="black";
}
else{
    mode="Dark"
    document.querySelector("body").style.backgroundColor="white";
}    
}
let divs=document.querySelector("div")
let bg="red";
divs.onmouseover=()=>{
    console.log("hello , you clicked me?")
    if(bg==="red"){
        bg="blue";
        let change=document.querySelector("div").style.backgroundColor="blue";

    }
    else{
        bg="red";
        document.querySelector("div").style.backgroundColor="pink";
    }
}