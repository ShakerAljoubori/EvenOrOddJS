let students = 20;
let add = students + 10;
let sub = students - 10;
let mul = students * 2;
let div = students / 2;
let exponent = students **2;
let modulus = students % 3;

console.log('Your base student count is ' + students);
console.log("We'll add 10 so it's now " + add);
console.log("We'll subtrct 10 so it's now " + sub);
console.log("We'll multiply by 2 so it's now " + mul);
console.log("We'll divide by 2 so it's now " + div);
console.log("We'll raise it to the power of 2 so it's now " + exponent);
console.log("We'll divide it by 3 but we need the remainder so the answer to that is " + modulus)

console.log("We'll try to make a odd or even app")


// 📝 Reminder for the code below:
// Always finish your IF with its ELSE before starting a new IF!
// If you put another IF (like NaN otherwise known as Not a Number) in the middle,
// the code gets mixed up and won't know which ELSE belongs to which IF!


function DisplayNum(){
    const num = Number(document.getElementById("num").value);
    if (num % 2 == 0) {
        document.getElementById("num-output").textContent = "The number " + num + " is even";
    }
    else {
        document.getElementById("num-output").textContent = "The number " + num + " is odd";
    }
    if (isNaN(num) == true) {
        document.getElementById("num-output").textContent = "Please enter a valid number";
    }
}

function DisplayName() {
    document.getElementById("name-output").textContent = "Hello " + document.getElementById("FName").value + " " + document.getElementById("LName").value + "!";
}