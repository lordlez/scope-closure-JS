function fruits() {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();


/*
    Block scope, las variables definidas dentro de un bloque
    solo pueden ser utilizadas dentro de ese bloque
*/