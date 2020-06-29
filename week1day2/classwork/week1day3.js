let todayDate = new Date("2020-06-24");
// find last day of month --
//steps : 
//1. get full year 
let year = todayDate.getFullYear();
let thisMnth = todayDate.getMonth();

let newDate = new Date(year,thisMnth+1,0);
console.log(newDate.getDate());

