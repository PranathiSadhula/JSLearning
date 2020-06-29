var data = "madam";
var data ="madamadam";
var dataChar = data.split("");
var revdata ="";
for (let index = data.length-1; index >= 0 ; index--) {
    revdata += data[index];
    
}
console.log(revdata);

if (data === revdata) {
    console.log("polindrom");
 }
 else{
     console.log("not a polindrom");
     
 }
