console.log("Change Even Characters in a String");
let exString = "chennai";
let charArray = exString.split("");
let evenStr ="";
console.log("input :"+exString);

for(var i = 0; i <= charArray.length-1; i++){
	if(i%2 == 0){
        evenStr = evenStr + charArray[i].toUpperCase();
    }
    else{
        evenStr = evenStr + charArray[i];
    }
}
console.log("output : "+evenStr);

