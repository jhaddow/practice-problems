//Write a function called factorial that takes in a number and returns the factorial (!) of that number. Example: factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 === 120

var factorial = function (num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

alert(factorial(9));