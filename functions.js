// Exo 1
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

const factorialExpr = (n) => {
    return n === 1 ? 1 : n * factorialExpr(n-1);
}

// Exo 2

const sum = (a, b = 0) => a + b;

// Exo 3
function concat(sep, ...strings){
    return strings.join(sep);
}

// Exo 4
const counter = (function(){
    let counter = 0;
    return {
        inc: () => counter ++,
        val: () => counter
    }
})();

// Exo 5
const formatDate = (date, format = "YYYY-MM-DD") => {
    const year = date.getFullYear();
    const pad = (str) => str.padStart(2, '0');
    const month = pad(String(date.getMonth() + 1)); // 0 - 11
    const day = pad(String(date.getDate()).padStart(2, '0'));

    switch(format.toUpperCase()) {
        case "YYYY-MM-DD":
            console.log(`${year}-${month}-${day}`)
            break;
        case "DD/MM/YYYY":
            console.log(`${day}-${month}-${year}`)
            break;
        default:
            console.log(`unknown format:  ${format.toUpperCase()}`);
    }
}
