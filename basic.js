// Exo: 1
function tellMeIfMajor(){
    const age = Number(prompt("How old are you?"));
    const name = prompt("What is your name?");
    const isMajor = age >= 18;

    if(isMajor) console.log(`${name} a ${age} ans, il/elle est majeur(e)`);
}
// Exo: 2

function calculate(b, c){
    return {
        sum: b + c,
        difference: b - c,
        product: b * c,
        quotient: c === 0 ? null : b / c
    }
}

// Exo 3

function arrayLoop(){
    const array = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
    let counter = 0
    for(let num of array){
        if(num > 50) counter++
    }
    console.log(array, counter)
}

// Exo 4

function arrayPersonLoop(){
    const persons = [
        { name: "Jacqueline", age: 10, city: "Yaounde" },
        { name: "Axelle", age: 12, city: "Yaounde" },
        { name: "Gabrielle", age: 14, city: "Yaounde" },
    ]

    for(let { name, age, city }  of persons){
        console.log(`${name}, (${age} ans) vient de ${city}`)
    }
}

// Exo 5

function invertedMerge(array1, array2){
    console.log([...array2, ...array1])
}
function invertedMerge2(obj1, obj2){
    console.log({...obj2, ...obj1})
}
