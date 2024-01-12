"use strict";
//La classe è un modello per la creazione di oggetti e fornisce un modo per strutturare oggetti
//ed incapsulare(modo in cui i dati vengono archiviati e resi accessibili all'interno di un oggetto 
//o di una classe.) dati e comportamenti
class Clock {
    //Costruttore --> Metodo che serve per istanziare gli oggetti ed inizializzare gli attributi
    //Uso quello con gli attributi per passare i valori per inizializzare l'oggetto durante l'istanza
    constructor(hour, minute, second) {
        //Attributi che sono ore, minuti e secondi
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        //Verifica che le ore siano tra 0 e 23
        if (hour >= 0 && hour <= 23) {
            this.hour = hour;
        }
        else {
            console.log("Errore! Inserisci valori tra 0 e 23");
        } //[0, 23]
        //Verifica che i minuti siano tra 0 e 59
        if (minute >= 0 && minute <= 59) {
            this.minute = minute; //[0, 59]
        }
        else {
            console.log("Errore! Inserisci valori tra 0 e 59");
        }
        //Verifica che i secondi siano tra 0 e 59
        //Number è l'oggetto che rappresenta numeri di qualsiasi tipo, isInteger() è il metodo che 
        //verifica se sia intero o meno e restituisce un valore booleano (true o false)
        if (second >= 0 && second <= 59 && Number.isInteger(second)) {
            this.second = second; //[0, 59]
        }
        else {
            console.log("Errore! Inserisci valori interi tra 0 e 59");
        }
    }
    //I metodi getter sono utilizzati per accedere alle proprietà di un oggetto.
    //I metodi setter vengono utilizzati per modificare i valori di un oggetto.
    get hourValue() {
        return this.hour;
    }
    set hourValue(value) {
        this.hour = value;
    }
    get minuteValue() {
        return this.minute;
    }
    set minuteValue(value) {
        this.minute = value;
    }
    get secondValue() {
        return this.second;
    }
    set secondValue(value) {
        this.second = value;
    }
}
var firstClock = new Clock(15, 20, 25);
//firstClock.addSecond(80);
//firstClock.addMinute(120);
//firstClock.addHour(23);
//firstClock.subtractionSecond(3000);
//firstClock.subtractionMinute(110);
//firstClock.subtractionHour(25);
console.log(firstClock);
var secondClock = new Clock(15, 20.5, 25);
//secondClock.addSecond(40);
//secondClock.addMinute(65);
//secondClock.addHour(4);
//secondClock.subtractionSecond(65);
//secondClock.subtractionMinute(70);
//secondClock.subtractionHour(10);
console.log(secondClock);
//Funzione che compara i due orologi
function compareTwoClock() {
    if (firstClock.hourValue == secondClock.hourValue &&
        firstClock.minuteValue == secondClock.minuteValue &&
        firstClock.secondValue == secondClock.secondValue) {
        console.log("I due orologi sono uguali");
    }
    else {
        console.log("I due orologi non sono uguali");
    }
}
/*Funzione che converte i minuti in ore corrispettive
function convertTime(minute: number) {
    //60 minuti sono 1 ora
    if(minute >= 60 && minute >= 0) {
        //Aggiungi 1 ora
        //Sottrai 60 ai minuti
    }
}

function convertTimeFirstClock() {
    var valueFirstClock = document.querySelector("#timeFirstClock") as HTMLInputElement;
    var firstClockValue = parseInt(valueFirstClock.value);
    firstClock.addMinutes(firstClockValue);
}

function convertTimeSecondClock() {
    var valueSecondClock = document.querySelector("#timeSecondClock") as HTMLInputElement;
    var secondClockValue = parseInt(valueSecondClock.value);
    secondClock.addMinutes(secondClockValue);
}*/
compareTwoClock();
//# sourceMappingURL=app.js.map