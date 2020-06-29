console.log("Find a given number is a prime number or not");
let inputNum = 7;
let isPrimeNum = true;
for(let i = 2; i < inputNum; i++){
    if(inputNum % i === 0){
        isPrimeNum = false;
        break;
    }
}

console.log(inputNum+" is Prime Num "+isPrimeNum);

