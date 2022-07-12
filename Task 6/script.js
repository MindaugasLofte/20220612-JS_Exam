/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funkcijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
    { id: '1', name: 'John Smith', age: 20 },
    { id: '2', name: 'Ann Smith', age: 24 },
    { id: '3', name: 'Tom Jones', age: 31 },
    { id: '4', name: 'Rose Peterson', age: 17 },
    { id: '5', name: 'Alex John', age: 25 },
    { id: '6', name: 'Ronald Jones', age: 63 },
    { id: '7', name: 'Elton Smith', age: 16 },
    { id: '8', name: 'Simon Peterson', age: 30 },
    { id: '9', name: 'Daniel Cane', age: 51 },
];
// 1 dalis
let pradineSumosReiksme = 0

function getUserAverageAge() {
    let sum = users.reduce((BuvusiReiksme, dabartineReiksme) => BuvusiReiksme + dabartineReiksme.age, pradineSumosReiksme)
    let vidurkis = sum / users.length
        // tikrinu suma
        // console.log(sum)
    return `1 dalies atsakymas: Visų "users" masyvo narių amžiaus vidurkis yra ${vidurkis.toFixed(2)} metai`
}
getUserAverageAge(users)
console.log(getUserAverageAge())
    // 2 dalis

let usersOnlyNames = []
    // tikrinu ar gerai pasiims reiksme
    // console.log(users[0].name)
function getUsersNames() {
    for (i = 0; i < users.length; i++) {
        usersOnlyNames.push(users[i].name)
    }
    return usersOnlyNames
}
console.log("2 dalies atsakymas: Žemiau esantis masyvas grąžina visų users vardus naujame masyve:")
console.log(getUsersNames(users))