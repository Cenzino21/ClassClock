"use strict";
//Classe Clock per l'orologio
class Clock {
    constructor(hour, minute, second) {
        //Attributi che sono ore, minuti e secondi
        //private hour: number = 0;
        //private minute: number = 0;
        this.second = 0;
        //Verifica che le ore siano tra 0 e 23
        if (hour >= 0 && hour <= 23) {
            this.second = hour * 3600;
        }
        else {
            console.log("Errore! Inserisci valori tra 0 e 23");
        }
        //Verifica che i minuti siano tra 0 e 59
        if (minute >= 0 && minute <= 59) {
            this.second += minute * 60;
        }
        else {
            console.log("Errore! Inserisci valori tra 0 e 59");
        }
        //Verifica che i secondi siano tra 0 e 59
        if (second >= 0 && second <= 59 && Number.isInteger(second)) {
            this.second += second;
        }
        else {
            console.log("Errore! Inserisci valori interi tra 0 e 59");
        }
    }
    //I metodi getter sono utilizzati per accedere alle proprietà di un oggetto.
    //I metodi setter vengono utilizzati per modificare i valori di un oggetto.
    /*
    get hourValue() {
        return this.second;
    }

    set hourValue(value) {
        this.second = Math.floor(value / 3600);
    }

    get secondValue() {
        return this.second;
    }

    set secondValue(value) {
        this.second = value;
    } */
    calculateMinute(secondAdd) {
        this.second += secondAdd;
        let minute = Math.floor(this.second / 60);
        this.second = (this.second % 60);
        while (minute > 59) {
            minute -= 60;
        }
        console.log("I minuti sono: " + minute + ", i secondi sono: " + this.second);
    }
    calculateHour(secondAdd) {
        this.second += secondAdd;
        let hour = Math.floor(this.second / 3600);
        this.second = (this.second % 3600);
        console.log("Le ore sono: " + hour + ", i secondi sono: " + this.second);
    }
}
var firstClock = new Clock(1, 10, 30); //4230 --> 600
firstClock.calculateMinute(80);
//firstClock.calculateHour(3700);
console.log(firstClock);
var secondClock = new Clock(15, 20.5, 25);
console.log(secondClock);
//Funzione che compara i due orologi
/*function compareTwoClock() {
    if(firstClock.secondValue == secondClock.secondValue) {
        console.log("I due orologi sono uguali");
    } else {
        console.log("I due orologi non sono uguali");
    }
}

compareTwoClock();*/ 
//# sourceMappingURL=app.js.map