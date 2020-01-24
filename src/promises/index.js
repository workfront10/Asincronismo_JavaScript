const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if ((2 + 2) >= 4) {
            resolve("Great")
        } else {
            reject("Bad")
        }
    })
}

somethingWillHappen().then(res => console.log(res)).catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Cool")
            }, 2000)
        } else {
            const error = new Error("Bad")
            reject(error)
        }
    })
}

somethingWillHappen2().then(resp => console.log(resp)).catch(err => console.error(err))

//Ejecutar varias promesas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()]).then(res => console.log('Arreglo de resultados: ', res))
    .catch(err => console.error("Arreglo de errores: ", err))