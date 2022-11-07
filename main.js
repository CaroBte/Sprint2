//console.log("Hola mundo")

//Validación 

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.setCustomValidity("");
        input.checkValidity();
    })
    input.addEventListener("invalid", () => {
        input.setCustomValidity("Este campo no puede estar vacío")
    })
})

let email = document.querySelector("#email")
email.addEventListener("input", () => {
    email.setCustomValidity("");
    email.checkValidity();
})

email.addEventListener("invalid", () => {
    email.setCustomValidity("Parece que esto no es un correo electrónico")
})

//Formulario

let formulario = document.querySelector("#myForm")
formulario.addEventListener("submit", (event) => {

    let localData = localStorage.getItem("dataJSON")

    let dataArr;

    if (localData == undefined) {
        dataArr = []
    } else {
        dataArr = JSON.parse(localData)
    }

    let data = {
        nombre: event.target.nombre.value,
        apellido: event.target.apellido.value,
        email: event.target.email.value
    }

    dataArr.push(data)

    let dataJSON = JSON.stringify(dataArr)

    localStorage.setItem("dataJSON", dataJSON)
    console.log(dataJSON)

    formulario.reset()

})

//Crear

let output = document.querySelector("#output")

function crearHTML(_texto) {
    let p = document.createElement("p");
    let texto = document.createTextNode(_texto)
    p.appendChild(texto)
    output.appendChild(p)
    return p
}

//Mostrar en HTML

let dataMostrar = JSON.parse(localStorage.getItem("dataJSON"))

dataMostrar.forEach(element => {

    let nombre = element.nombre
    let apellido = element.apellido
    let email = element.email

    crearHTML(`Bienvenid@, ${nombre} ${apellido}, su correo electrónico es ${email}`)
});
