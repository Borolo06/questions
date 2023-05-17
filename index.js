let contenedoruno = document.getElementById("uno")
let contenedordos = document.getElementById("dos")
let contenedortres = document.getElementById("tres")
let contenedorcuatro = document.getElementById("cuatro")
let contenedorcinco = document.getElementById("cinco")
let contenedorseis = document.getElementById("seis")
let contenedorsiete = document.getElementById("siete")
let contenedorocho = document.getElementById("ocho")
let contenedornueve = document.getElementById("nueve")
let contenedordiez = document.getElementById("diez")

//botones
let botonuno = document.getElementById("botonuno")
let botondos = document.getElementById("botondos")
let botontres = document.getElementById("botontres")
let botoncuatro = document.getElementById("botoncuatro")
let botoncinco = document.getElementById("botoncinco")
let botonseis = document.getElementById("botonseis")
let botonsiete = document.getElementById("botonsiete")
let botonocho = document.getElementById("botonocho")
let botonnueve = document.getElementById("botonnueve")

//span's
let spanuno = document.getElementById("spanuno")
let spandos = document.getElementById("spandos")
let spantres = document.getElementById("spantres")
let spancuatro = document.getElementById("spancuatro")
let spancinco = document.getElementById("spancinco")
let spanseis = document.getElementById("spanseis")
let spansiete = document.getElementById("spansiete")
let spanocho = document.getElementById("spanocho")
let spannueve = document.getElementById("spannueve")
let spandiez = document.getElementById("spandiez")

//inputs
let inputuno = document.getElementById("inputuno")
let inputdos = document.getElementById("inputdos")
let inputtres = document.getElementById("inputtres")
let inputcuatro = document.getElementById("inputcuatro")
let inputcinco = document.getElementById("inputcinco")
let inputseis = document.getElementById("inputseis")
let inputsiete = document.getElementById("inputsiete")
let inputocho = document.getElementById("inputocho")
let inputnueve = document.getElementById("inputnueve")
let inputdiez = document.getElementById("inputdiez")

botonuno.addEventListener("click", () => {
    if (inputuno.value == "the hills") {
        contenedoruno.classList.add("inactivo")
        contenedordos.classList.remove("inactivo")
    } else if (inputuno.value == "option") {
        alert(" 1: Earned It \n 2: Whiskey \n 3: The Hills \n 4: El Andariego")
    } else {
        spanuno.innerHTML = "Incorrecto"
    }
})

botondos.addEventListener("click", () => {
    if (inputdos.value == "the weeknd") {
        contenedordos.classList.add("inactivo")
        contenedortres.classList.remove("inactivo")
    } else if (inputdos.value == "option") {
        alert(" 1: drake \n 2: the weeknd \n 3: octavio mesa \n 4: xxxtentacion")
    } else {
        spandos.innerHTML = "Incorrecto"
    }
})

botontres.addEventListener("click", () => {
    if (inputtres.value == "beauty behind the madness") {
        contenedortres.classList.add("inactivo")
        contenedorcuatro.classList.remove("inactivo")
    } else if (inputtres.value == "option") {
        alert(" 1: beauty behind the madness \n 2: YHLQMDLG \n 3: Un verano sin ti \n 4: Rip Roach")
    } else {
        spantres.innerHTML = "Incorrecto"
    }
})

botoncuatro.addEventListener("click", () => {
    if (inputcuatro.value == "pop") {
        contenedorcuatro.classList.add("inactivo")
        contenedorcinco.classList.remove("inactivo")
    } else if (inputcuatro.value == "option") {
        alert("1: auditive pornographic \n 2: Sexual Content 3: pop \n 4: Cumbia")
    } else {
        spancuatro.innerHTML = "Incorrecto"
    }
})

botoncinco.addEventListener("click", () => {
    if (inputcinco.value == "27-05-2015") {
        contenedorcinco.classList.add("inactivo")
        contenedorseis.classList.remove("inactivo")
    } else if (inputcinco.value == "option") {
        alert("1: 27-12-2018 \n 2: 27-05-2015 \n 3: 06-10-2021 \n 4: 06-12-1995")
    } else {
        spancinco.innerHTML = "Incorrecto"
    }
})

botonseis.addEventListener("click", () => {
    if (inputseis.value == "1") {
        contenedorseis.classList.add("inactivo")
        contenedorsiete.classList.remove("inactivo")
    } else if (inputseis.value == "option") {
        alert("NUMBER \n 1: 1 \n 2: 2 \n 3: 3 \n 4: 4")
    } else {
        spanseis.innerHTML = "Incorrecto"
    }
})

botonsiete.addEventListener("click", () => {
    if (inputsiete.value == "2") {
        contenedorsiete.classList.add("inactivo")
        contenedorocho.classList.remove("inactivo")
    } else if (inputsiete.value == "option") {
        alert("NUMBER \n 1: alfonso venavidez, Jesus Cuesta, Argemiro Sanchez, Sebastian Alcatraz \n 2: The Weeknd, ahmad balshe, emmanuel nickerson, carlo montagnese \n 3: Los tigres del norte \n 4: The Weeknd, emmanuel G', Cesar rich, Checho")
    } else {
        spansiete.innerHTML = "Incorrecto"
    }
})

botonocho.addEventListener("click", () => {
    if (inputocho.value == "toxic relations") {
        contenedorocho.classList.add("inactivo")
        contenedornueve.classList.remove("inactivo")
    } else if (inputocho.value == "option") {
        alert("1: The suavitel \n 2: How the singer was crazy for she \n 3: toxic relations \n 4: the girl of friend is invisible for me")
    } else {
        spanocho.innerHTML = "Incorrecto"
    }
})

botonnueve.addEventListener("click", () => {
    if (inputnueve.value == "dark rhythm") {
        contenedornueve.classList.add("inactivo")
        contenedordiez.classList.remove("inactivo")
    } else if (inputnueve.value == "option") {
        alert("1: Armonic rhythm \n 2: friend zone of the brother \n 3: dark rhythm \n 4: Cumbia of atlantic")
    } else {
        spannueve.innerHTML = "Incorrecto"
    }
})