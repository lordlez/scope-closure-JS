function greeting() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName();
}


const g = greeting();
console.log(g);
console.log(g());