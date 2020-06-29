console.log("Print Fibonacci Series for a range of 8 ==> 0, 1, 1, 2, 3, 5, 8, 13");

let input = 8;
let fibonacciSeries = [];
let i = 0;
while ( i < input) {
    if(i === 0 || i === 1)
    {
        fibonacciSeries.push(i);
    }else{
        var length = fibonacciSeries.length;
        var num1 = fibonacciSeries[length-1];
        var num2 = fibonacciSeries[length-2];
        var sum = num1 + num2 ;
        fibonacciSeries.push(sum);
    }
    i++;
    
}
console.log(fibonacciSeries);
