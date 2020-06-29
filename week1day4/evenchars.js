console.log("Change Even Characters in a String");
let exString = "chennai";
let charArray = exString.split("");
let evenStr =""; // my working
let evenArray = []; //hw review by sam
console.log("input :"+exString);

for(var i = 0; i <= charArray.length-1; i++){
	if(i%2 == 0){
        evenStr = evenStr + charArray[i].toUpperCase();
        evenArray.push(charArray[i].toUpperCase());
    }
    else{
        evenStr = evenStr + charArray[i];
        evenArray.push(charArray[i]);
    }
}
console.log("output : "+evenStr);
console.log("hw review by sam o/p :"+evenArray.join(""));

