/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir  atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
// kintamieji
const ENDPOINT = 'cars.json';

const divContainer = document.getElementById('.container');
const output = document.getElementById('#output');


const data = '';
//  fetch json filą
fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.length; i++) {

            console.log(`${data[i].brand}`), data[i].models.toString()
            console.log(data[i].models.toString())
            let div = document.createElement('div');
            div.textContent = `${data[i].brand}` + data[i].models.toString();
        }
    })
    .then(function(data) {

        data.forEach(data => {
                let div = document.createElement('div');

                div.textContent = `
                        ${data[0].brand }
                        `;
                div.style.textAlign = "center";
                div.style.display = "block";
                div.style.color = "magenta";
                output.appendChild(div);
            })
            .catch((error) => {
                console.error('Error:', error);
            });




    })