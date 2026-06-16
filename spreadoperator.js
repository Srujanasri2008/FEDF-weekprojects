//used to expand elements 
let a=[1,2,3];
let b=[4,5,6];
let merged = [...a, ...b];
console.log("Merged Array:", merged);

const arr = [1,2,3];
console.log(...arr);

const originalarr=[1,2,3]
const copiedarr=[...originalarr];
console.log(copiedarr);

const arr1=[1,2,3];
sum(...arr1);
function sum(a,b,c){
    console.log(a+b+c);
}

//spread merge
 let student = { name: "Srujana", age:18};
 let details = { city: "Hyd", course: "Ph.D"};
 let fulldet = {...student, ...details};
 console.log(fulldet);

 //spread_function  passing spread operator as a n argument to the function
 function add(x,y,z){
     return x+y+z;
 }
 let nums = [5,10,12];
 console.log("Sum: ",add(...nums));
 // push
let original=[10,20,30];
let copy=[...original];
copy.push(40);
console.log("original :",original);
console.log("Copy :",copy);