let num= Number(prompt("Enter a number between 1 to 100"));
let secretnumber=96;
while(num!=secretnumber){
num=prompt("Enter Number Again")
// num++;
}
console.log("Congratulations You entered Correct Number =" ,num);
//Question no 2
for(let i=0;  i<=100 ; i++) {
if(i% 2==0){
console.log(i)
}
// else{
//     console.log("This is not even number");
// }
}
// let marks=[98,99,100,101,102,103]
// let average=0;
// for(let i=0;i<marks.length;i++){
// average+=marks[i]/marks.length;
// }
// console.log("Average Result of the class is =", average);
let product=[250.645,300,900,50]
for(let i = 0; i<product.length ; i++){
    let productoff = product[i]/10;
    product[i]-=productoff;
}

    console.log(product);
