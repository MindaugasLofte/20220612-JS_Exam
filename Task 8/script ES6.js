/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// ES6 -Constructor function for Calculator objects 
class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.sum = function() {
            return this.firstNumber + this.secondNumber;
        };
        this.subtraction = function() {
            return this.firstNumber - this.secondNumber;
        };
        this.multiplication = function() {
            return this.firstNumber * this.secondNumber;
        };
        this.division = function() {
            return (this.firstNumber / this.secondNumber).toFixed(3);
        };
    }
}
// Create a Calculator object
// const numbers = new Calculator(15, 7);


// Create a Calculator object. Additional option: User must give two numbers
const numbers = new Calculator(parseInt(prompt("Įveskite pirmą skaičių")), parseInt(prompt("Įveskite antrą skaičių")));

// Display output
let output = `Sum(a+b)= ${numbers.sum()},
    Subtraction(a-b)= ${numbers.subtraction()},
    Multiplication(a*b)= ${numbers.multiplication()},
    Division(a / b) = ${ numbers.division()}`

// papildomai sukuriamas naujas DIV elementas html->body dalyje.
let newDiv = document.createElement('div');
const newDivText = document.createTextNode("");
newDiv.style.textAlign = "center";
newDiv.style.display = "block";
newDiv.style.color = "magenta";
newDiv.appendChild(newDivText);
document.querySelector("body").appendChild(newDiv);

// peruoti atsakymą į html
document.querySelector("div").innerHTML = "<h2>Atsakymas:</h2>" + output;
document.querySelector("div").style.cssText = `
      color:white;
      font-size:30px;
      border:2px solid black;
      padding: 20px;
      text-align: center;
      size:50vh;
      background-color:SlateBlue;
      border-radius: 10px;
      width:60%;
      margin: auto;
    `
    // perduoti atsakymą į console
console.log("Atsakymas:", output)