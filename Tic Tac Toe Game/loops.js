let i="Hassnain";
for (let val of i)
// console.log("Total Alphabets" , i);
    console.log("string chracters =", val);
    let j="ALi Hassnain"
    for(let val in j)
        console.log("Total chracters =" ,j[val]);
console.log("Total chracters =" ,j);
let infor={
    name:"Hassnain",
    age:22,
followers:466,
}
for(let key in infor)
    console.log(key, "values =",infor[key] );



               Strings 
let name="Muhammad";
console.log("Name is ",name)
console.log(name.length) // length of string
console.log(name[6]);// string indexes

        //template Literals
 let obj={
book: "Math",
price: 300,
 };
// console.log("The price of ",obj.book, "book is" ,obj.price) //First Method not useful
let result=`The price of Bokk ${obj.book}  is ${obj.price}`; //useful method
console.log(result); 


          //    Escape chracter
console.log("Ali\nHassnain") //\n use for next line space
let name="Ali Hassnain"
console.log(name.length); //result =12
let str="Ali\tHassnain"
console.log(str.length); //result =12 but \t =1 alphabet