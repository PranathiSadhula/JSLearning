console.log("Reverse a sentence's words alone");

let inputStr = "Welcome to Chennai City";
let wordsArray = inputStr.split(" ");
let revSentence = "";
for(let i = wordsArray.length-1; i >= 0; i--){
    revSentence = revSentence+wordsArray[i]+" ";    
}
console.log(revSentence);

