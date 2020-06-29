let exString = "sruthi";
let charArray = exString.split("");

let charMap = new Map();
for(var i = 0; i <= charArray.length; i++){
	charMap.set(i, charArray[i]);

}

console.log(charMap);
