let marks=[98,99,100,101,102,103]
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
let books=["maths", "English", "Urdu","Science"]
console.log(books);
books.push("Islamiyat","GeneralKnowledge") // add indexs at the end
console.log(books)
books.pop(); // delete items/index from the end
console.log(books);
books.unshift("Programming Fundamentals") // add item at start
books.shift();//delete items form the start  
console.log(books)

     //  array to  string 
console.log(books.toString());  // convert array to string
let booksid=[101,102,103,104,]
let merge= books.concat(booksid) //merging two
console.log(merge);
let name=["ALi", "HAssnain", "Umair","Sameer","Zeeshan"]
console.log(name);
let change=name.slice(2,4);//change in original array and can change in anywhere in array
console.log(change);
name.splice(0 ,1,"Ahmad","Adeel")
console.log(name); 
let company=["Blomber","Microsoft","Google","Uber","INdrive","Netflix"]
console.log(company)
company.splice(0,1,0)
console.log(company)
company.splice(3,1,"Taxi")
console.log(company)
company.push("Amazon")
console.log(company)