const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();

/* 
    Aclaracion: Si hago un closure (funcion dentro de otra) debo retorar la funcion interna, de lo contrario, lo que quiera hacer esa funcion interna no lo va a hacer
*/