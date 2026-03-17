// Exo 1

function mapFilterArray(arr){
    const evens = arr.filter((n) => n % 2 === 0);
    const cubes = arr.map((n) => n ** 3);

    console.log(evens, cubes);
}

// Exo 2

function arrSum(arr){
    const totalSum = arr.reduce((a,b) => a + b, 0);
    return console.log(totalSum);
}

// Exo 3

function filterAndTransform(arr, pred, fn){
    const result = [];
    for (const e of arr) {
        if(pred(e)) result.push(fn(e));
    }
    return result;
}

// Exo 4

function compose(...fns){
    return (value) => {
        return fns.reduceRight((acc, cur) => cur(acc), value);
    }
}

// Exo 5

function pipe(...fns){
    return (value) => {
        return fns.reduce((acc, cur) => cur(acc), value);
    }
}

// Exo 6

function processNumbers(arr){
    return pipe(
        arr => arr.filter((n) => n > 3),
        arr => arr.map((n) => n * 10),
        arr => arr.map((n) => `N-${n}`),
    )(arr)
}
console.log(processNumbers([1,4,7]));
