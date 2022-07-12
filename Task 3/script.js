/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
let btn = document.querySelector('#btn');
let results = document.querySelector('#output');
btn.addEventListener('click', getData);
// Žinutė "Press "Show Users" button to see users" turi išnyksta
document.querySelector('#btn').addEventListener('click', function() {
    document.getElementById("message").hidden = true;
}, false);

function getData() {
    fetch(ENDPOINT)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            // console.log(data);//pasitikrinu
            data.forEach(el => {
                let div = document.createElement('div');
                // papildomai padidinta pirma raide ir zemiau kazkiek pakeistas stilius
                div.textContent = `${el.login[0].toUpperCase()+el.login.slice(1)}`;
                div.style.textAlign = "center";
                div.style.display = "block";
                div.style.color = "magenta";
                let img = document.createElement('img');
                img.setAttribute('src', el.avatar_url);
                img.style.width = '50vw';
                div.appendChild(img);
                results.appendChild(div);

            });
        })

}