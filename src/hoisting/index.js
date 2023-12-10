// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es: ${elmo}`);
}

var elmo = 'Elmito';



/*
    Las variables no se elevan, las funciones si, por lo tanto si llamo funciones que declare mas abajo, no generan conflictos
*/