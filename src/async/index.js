const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => {
            resolve("Hace algo")
        }, 2000): reject(new Error("Hay un error"))
    })
}

const executeSomethingAsync = async() => {
    const something = await doSomethingAsync() //Espera que esa promesa suceda
    console.log("Resultado: " + something)
}

console.log("Before")
executeSomethingAsync()
console.log("After")

const anotherAsyncFunction = async() => {
    try {
        const something = await doSomethingAsync()
        console.log("Resultado2: ", something)
    } catch (error) {
        console.log("Error: " + error)
    }
}


console.log("Before 2")
anotherAsyncFunction()
console.log("After 2")