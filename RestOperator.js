//rest operator is passed in the function as an argument 
// we define rest operator within the function
function sum(...num){
    let total = 0;
    for (let n of num){
        total+=n;
    }
    return total;
}
console.log("Total: ", sum(1,2,3,4,5));

//example2
display(1,2,3,4,5);
function display(first,second, ...remaining){
    console.log(first);
    console.log(second);
    console.log(remaining);
}