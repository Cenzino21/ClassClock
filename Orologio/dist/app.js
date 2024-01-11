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
    addSecond(secondAdd) {
        this.second += secondAdd;
        var minutesObtained = Math.floor(this.second / 60);
        this.addMinute(minutesObtained);
        this.second = (this.second % 60);
    }
    addMinute(minuteAdd) {
        this.minute += minuteAdd;
        var hourObtained = Math.floor(this.minute / 60);
        this.addHour(hourObtained);
        this.minute = (this.minute % 60);
    }
    addHour(hourAdd) {
        this.hour += hourAdd;
        this.hour = this.hour % 24;
    }
    subtractionSecond(subtractionSecond) {
        this.second -= subtractionSecond;
        while (this.second < 0) {
            this.second += 60;
            this.minute--;
        }
        if (this.minute < 0) {
            this.minute += 60;
        }
    }
    subtractionMinute(subtractionMinute) {
        this.minute -= subtractionMinute;
        while (this.minute < 0) {
            this.minute += 60;
            this.hour--;
        }
        if (this.hour < 0) {
            this.hour += 24;
        }
    }
    subtractionHour(subtractionHour) {
        this.hour -= subtractionHour;
        if (this.hour < 0) {
            this.hour += 24;
        }
    }
}
var firstClock = new Clock(15, 20, 25);
//firstClock.addSecond(3000);
//firstClock.addMinute(3000);
//firstClock.addHour(23);
//firstClock.subtractionSecond(80);
//firstClock.subtractionMinute(100);
//firstClock.subtractionHour(16);
console.log(firstClock);
var secondClock = new Clock(13, 0.5, 45);
//secondClock.addSecond(40);
//secondClock.addMinute(65);
//secondClock.addHour(4);
//secondClock.subtractionSecond(65);
//secondClock.subtractionMinute(70);
//secondClock.subtractionHour(10);
console.log(secondClock);
//Funzione che compara i due orologi
function compareTwoClock() {
    if (firstClock === secondClock) {
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