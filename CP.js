//1st exercice
function reversestring(inputstring) {
    var reversedstr = '';
    for (var i = inputstring.length - 1; i >= 0; i--) {
        reversedstr += inputstring[i];
    }
    return reversedstr;
}
console.log(reversestring("Hello"))

//2nd exercice
function counting(inputStr){
    return `${inputStr} has ${inputStr.length} letters`
}
console.log(counting("Ahmed"))

//3rd exercice
function captial(string){
    return `Lower case: ${string} , Upper case: ${string.toUpperCase()}`
}
console.log(captial("ahmed"))

//4th exercice
function minmax(myarray){
    var min = myarray[0]
    var max = myarray[0]
    for( var i = 1 ; i < myarray.length ; i++) {
        if (myarray[i] < min){
            min = myarray[i]
        }
        else if(myarray[i] > max){
            max = myarray[i]
        } 
    }
    return `min value: ${min} , max value: ${max}`
}
console.log(minmax([5 , 4 , 3 , 2 , 1]))

//5th exercice 
function sumofelements(arr){
    var sum = 0
    for ( i = 0 ; i < arr.length ; i++){    
        sum += arr[i]
    }
    return sum
}
console.log(sumofelements([1 , 2 , 3]))

//6th exercice
function filter(arr, condition) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
var isEven = function(num) {
    return num % 2 == 0;
};
console.log(filter([1 , 2 , 3 , 4 , 5] , isEven))

//7th exercice
function findfactorial(numm){
    if (numm == 1 || numm == 0 ){
        return 1
    }
    else{
        var factorial = 1
        for(var i = 2 ; i <= numm ; i++){
            factorial *= i
        }
    }
    return factorial
}
console.log(findfactorial(2))

//8th exercice
function checkifprimeornot(n){
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    if(n < 2){
        return false
    }
    return true
    }
console.log(checkifprimeornot(7));
console.log(checkifprimeornot(12));

//9th exercice 
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let prev = 0;
        let curr = 1;
        let result;
        for (let i = 2; i <= n; i++) {
            result = prev + curr;
            prev = curr;
            curr = result;
        }
        return result;
    }
}
console.log(fibonacci(20));