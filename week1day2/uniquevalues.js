//console.log("Print the unique values alone in a String ex: paypal o/p : yl");

let exString = "paypal";
let charArray = exString.split("");

let charMap = new Map();
let charCount;
charArray.forEach(eachChar => {
    if(charMap.has(eachChar)){
        charCount = charMap.get(eachChar)+1;
        charMap.set(eachChar, charCount);
    }
    else{
        charMap.set(eachChar, 1);
    }
});
//Iterate over forEach
charMap.forEach((value, key, map) => {
    if (value == 1) {
        console.log(key);
    }
});


