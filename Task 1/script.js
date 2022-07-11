/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function kgToLb() { lb = inpt.value * 2.2046; return lb.toFixed(2) }

function kgToG() { g = inpt.value / 0.0010000; return g.toFixed(2) }

function kgToOz() { oz = inpt.value * 35.274; return oz.toFixed(2) }

let btn = document.querySelector('#submit-btn');
let inpt = document.querySelector('#search');
let output = document.querySelector('#output');
let title = document.getElementById('title');

btn.addEventListener('click', printOutput);

function printOutput() {
    event.preventDefault()

    if (isNaN(inpt.value)) {
        return alert(inpt.value + ' is not a NUMBER! Please give me a Number next time:) please! P.S. ALSO do not use "," separator:)');
    }
    output.innerHTML = `
    <div class="style">
    <div><h3>Jūsų įvesti ${inpt.value}kg sudaro: </h3></div>
    <div>
    ${kgToLb()}lb 
    ARBA ${kgToG()}g 
    ARBA ${kgToOz()}oz</div>
    </div>`
    document.querySelector(".style").style.cssText = `
  display: block; 
  position: static;
  color:white;
  font-size:30px;
  border:2px solid black;
  border-radius:15%
  padding: 20px;
  text-align: center;
  size:50vh;
  background-color:SlateBlue;
  border-radius: 10px;
  width:60%;
  margin: auto;
`
}