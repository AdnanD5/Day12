//Only change code below this line
function rangeOfNumbers(startN, endN){
if (startN>endN){
    return "Imposible"
}else if(startN=endN){
    return endN;
} else {
const numbers = rangeOfNumbers(startN, endN-1);
numbers.push(endN);
return numbers
}

}
//Only change code above this line
console.log(rangeOfNumbers(7,1)); //Change this line
console.log(rangeOfNumbers(7,7)); //Change this line
console.log(rangeOfNumbers(1,7)); //Change this line
module.exports = rangeOfNumbers;