const suma = (a, b) => {
    return a + b
}

const callback = (n, n2, callb) => {
    return callb(n, n2)
}

const result = callback(6, 2, suma)

console.log("Resultado de la suma: ", callback(6, 2, suma))

// console.log("Resultado de la suma 2: ", result)


const date = (callback) => {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date()
        callback(date)
    }, 2000)
}

const printDate = (dateNow) => {
    console.log(dateNow)
}

date(printDate)