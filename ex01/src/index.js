//Only change code below this line
function myRecursion(arr, n){
    if(n<1){
        return 0;
    }else{

        return (arr, n-2) *arr[n-1]
        
        //arr[n] 
        //(arr,n+1);
            //return (arr, (n)); //+arr[n11];
    }
}

//Only change code above this line
console.log(myRecursion([1], 0)); //Change this line
console.log(myRecursion([1, 2, 3, 4], 2)); //Change this line
console.log(myRecursion([1, 2, 3, 4], 3)); //Change this line
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5)); //Change this line
module.exports = myRecursion;