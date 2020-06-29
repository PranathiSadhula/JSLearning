console.log("Check whether 2 Strings are Anagram or not");

let word1 = "listen";
let word2 = "silent";
let isAnagram = true;
if (word1.length == word2.length) {
    word1.split("").forEach(element => {
        if(!word2.includes(element)){
            isAnagram = false;
           // break; break, return or contiune doesnt work with foreach loop
        }
    });
 
}
else{
    isAnagram = false;
}

console.log("given 2 strings are anagram  :"+isAnagram);

