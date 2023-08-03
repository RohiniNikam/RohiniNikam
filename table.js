/* JavaScript program to generate a multiplication table of a particular range */

var num = parseInt(prompt('Enter an integer: '));
var range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    var res = i * num;
    console.log(num +" * "+ i + " = " + res);
}

