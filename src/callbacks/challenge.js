let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //Para consumir el api
const API = "https://rickandmortyapi.com/api/character/"
const fetchData = (url_api, callback) => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true); //El tercer el valor es que se maneje de forma asincrona
    xhttp.onreadystatechange = function(event) { //Tiene 5 estados
        if (xhttp.readyState === 4) { //Que ha sido completado
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send() //Se envía la solicitud
}

fetchData(API, (err1, data1) => {
    if (err1) {
        console.error(err1)
        return
    } else {
        fetchData(API + data1.results[0].id, (err2, data2) => {
            if (err2) {
                console.error(err2)
                return
            } else {
                fetchData(data2.origin.url, (err3, data3) => {
                    if (err3) {
                        console.error(err3)
                        return
                    } else {
                        console.log(data1.info.count)
                        console.log(data2.name)
                        console.log(data3.name)
                    }
                })
            }
        })
    }
})