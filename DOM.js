// let first=document.getElementById("header") // getting through id
// // console.dir(first);
// console.log(inner);
// // console.log(first);
// let second=document.getElementsByClassName("paragraph") // getting through classsName
// console.dir(second);
// // console.log(second)
// let third=document.getElementsByTagName("button") //getting through tagName
// console.dir(third)
// // console.log(third)
// let get=document.querySelector("p") // querySeclector is used for all tag/id/class
// console.dir(get);
// variableName.innerHTML;  we can get inner html / mean whats tag/div etc was used in html
//VariableName.innerText= we can get inner text /which is written in tag/id/class by writting in console/browser
//VariableName.tagName= we can get tag which from which id/class is written ( maybe it is written in div , p , section any tag)
//VariableName.textContent we can get that text whose text visibillity is hidden .
let practice = document.querySelector("h2");
console.dir(practice.innerText);
practice.innerText = practice.innerText + " from Apna College Student";   



