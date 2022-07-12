/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        const { budget } = this;
        if (filmas.budget > 100000000 ? (filmas.wasExpensive = "true") : (filmas.wasExpensive = "false")) { return filmas.wasExpensive }

    }
}

const filmas = new Movie("Titanikas", "Džordana", 200000000);
// if (filmas.budget > 100000000 ? (filmas.wasExpensive = "true") : (filmas.wasExpensive = "false"));
// console.log(filmas.prototype)

// perduoti atsakymą į console
console.log("Is Movie was expensive? Answer is " + filmas.wasExpensive().toUpperCase())
console.log("Atsakymas būtų toks su pridėtu wasExpensive metodu : ",
    filmas)