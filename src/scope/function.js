// function scope
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);


/* 
    Con function scope, solo puedo usar las variables declaradas
    en de la funcion, dentro de la misma. Si trato de acceder a esas variables por fuera de la funcion entonces no voy a poder ya que esas variables no estan declaradas de manera global, sino que solo por dentro de la funcion.
 */


