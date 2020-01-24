let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //Para consumir el api
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true); //El tercer el valor es que se maneje de forma asincrona
        xhttp.onreadystatechange = (() => { //Tiene 5 estados
            if (xhttp.readyState === 4) { //Que ha sido completado
                xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error'))
            }
        });
        xhttp.send() //Se envía la solicitud
    })

}

module.exports = fetchData;