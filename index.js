
// function isPerfectSquare(n){
//     if(n < 0){
//         return "invalid"
//     }else{
//     const sqrt = Math.sqrt(n)

    
//     console.log(sqrt)

//     if(Number.isInteger(sqrt)){
//         return true;
//     } else{
//         return false;
//     }
// }
// }

// console.log(isPerfectSquare(16))


function isPerfectSquare(n) {
    if (n < 0) return "invalid";
    return Math.sqrt(n) % 1 === 0;
}


console.log(isPerfectSquare(16)); // Output: true

