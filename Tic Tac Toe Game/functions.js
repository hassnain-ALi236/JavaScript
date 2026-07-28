function print(){
console.log("My name is Ali Hassnain\nI am recently studyng in UET")
}
print();
let result=9
function additon(){
let n1=Number(prompt("Enter your First Number"));
let n2=Number(prompt("Enter your second number"))
let result=n1+n2;
console.log(result);
return result;
}
additon();
function subbtraction(x,y){
    let sum=10-2;
    console.log(sum);
    // return sum;
}
subbtraction();
let val=subbtraction(10,6)
console.log(val);
const multiplt=(a,b)=>{
    return a*b;
}
// let output=multiplt(8,3);
console.log(multiplt(8,3));
const divison=(a,b)=>{
    s=16/4
    console.log(s)
}
divison();


       practce
const arrowMultiplication= ()=>{
 let name=prompt("Enter your name ")
 let count = 0;
 for ( let char of name){
    if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
    }
 }
 console.log(count)
}
arrowMultiplication()
// A functions which takes a functions as an argument or return another function it is called higher order functions / methods
let arr=[200,400,600];
arr.forEach((idx,val,arr)=>{
console.log(idx,val,arr);
})

// for each loop

let square=[1,2,3,4,5,6,7,8,9,10];
let numsquare=(square)=>{
console.log(square*square)
}
square.forEach(numsquare)

            //    map loop

let books=["math", "English", "Urdu"]
books.map((val)=>
{
    console.log(val)
})
let number=[25,50,75,100]
 let sum=number.map((number)=>
{
    return number+number
    // console.log(number);
}
)
console.log(chwal);

// filter array

let num=[1,2,3,4,5,6,7,8,9,10]
let newfilter=num.filter((num)=>
{
return num%2===0;
})
console.log(newfilter)

// reduce array

let array=[2,4,6,8,10,12,14,16,18,20]
let newarray=array.reduce((previous,current)=>
{
return previous+current;
})
console.log(newarray);
let average=[43,40,36,22,48,40]
let countAverage=average.reduce((result,current)=>
{
    return result+current/average.length;

})
console.log(countAverage)
