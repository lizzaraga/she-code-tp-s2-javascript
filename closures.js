// Exo 1

function makeCounter(initial = 0) {
    let counter = initial;
    return {
        increment: () => counter ++,
        val: () => counter,
    }
}


// Exo 2

function memoize(fn){
    const cache = {}

    return (...args) => {
        const key = JSON.stringify(args)
        if (cache[key]) return cache[key]
        const result = fn(...args)
        cache[key] = result
        return result
    }
}

// Exo 3

const TodoStore = (function() {
    const tasks = []

    return {
        add: (task) => {
            tasks.push(task)
        },
        list: () => [...tasks],
        delete: (index) => {
            tasks.splice(index, 1)
        },
    }
})()


// Exo 4

function delayLog(message, ms){
    setTimeout(()=>{ console.log(message) }, ms*1000)
}

// Exo 5

function partial(fn, ...argsFixed){
    return (...argsRest) => fn(...argsFixed, ...argsRest)
}

const add10 = partial((a,b) => a+b, 10);
console.log(add10(5))