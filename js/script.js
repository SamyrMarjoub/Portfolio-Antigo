let contador = 1
let totala = 0
let totaln = 0
let totale = 0
let clickado = false
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const title = document.querySelector('.title')
const desc = document.querySelector('.desc')
const linkbtn = document.querySelector('.link-button')
const textgroup = document.querySelector('.group')
const resume = document.querySelector('.resume')
const btnmain = document.querySelector('.button')
const endresume = document.querySelector('.end-resume')
const msg = document.querySelector('#msg')
const innerCarac = document.querySelector('.caractere')
const mobileimg = document.querySelector('.bola')
const text = document.querySelector('.text')
const buttone = document.querySelector('.buttone').addEventListener('click', function () {
    window.scrollTo(0, 3100)

})
const workmobile = document.querySelector('.work-mobile').addEventListener('click', function () {
    window.scrollTo(0, 800)
})
const homemobile = document.querySelector('.home-mobile').addEventListener('click', function () {
    window.scrollTo(0, 0)

})
const aboutmobile = document.querySelector('.about-mobile').addEventListener('click', function () {
    window.scrollTo(0, 2300)

})
const emailmobile = document.querySelector('.email-mobile').addEventListener('click', function () {
    window.scrollTo(0, 3600)

})
const abouta = document.querySelector('#about').addEventListener('click', function () {
    event.preventDefault()
    window.scrollTo(0, 2100)
})
const worka = document.querySelector('#work').addEventListener('click', function () {
    event.preventDefault()
    window.scrollTo(0, 1000);
})
const connect = document.querySelector("#connect").addEventListener('click', function () {
    event.preventDefault()
    window.scrollTo(0, 3100)

})
const mainbtn = document.querySelector('.main-btn').addEventListener('click', function () {
    window.scrollTo(0, 1000);
})
const butao = document.querySelector('.btn1').addEventListener('click', function () {
    --contador
    cont.innerHTML = `0${contador}/03`
    if (contador < 1) {
        cont.innerHTML = `01/03`
        contador = 1
    }
    if (contador == 1) {
        title.innerHTML = "Planet Facts Site"
        desc.innerHTML = "WebPage"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/PLANET-FACTS/")
        mobileimg.style.backgroundImage = "url('./images/designs/terra.jpg')"
        text.innerHTML = 'Um Projeto pessoal de uma página contando os fatos sobre todos os planetas do nosso sistema solar. A página está Full-Responsiva e foi feita usando NodeJS(Express), CSS e Javascript. Desafio do site frontendmentor.'
    }
    if (contador == 2) {
        title.innerHTML = "SuunySide Landing Page"
        desc.innerHTML = "Landing Page"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/SuunySide-Page/")
        mobileimg.style.backgroundImage = "url('./images/designs/desktop-preview-sunny.jpg')"
        text.innerHTML = 'Um Projeto pessoal de uma landing Page criada puramente com HTML, CSS E JS com o intuito de por em prática minhas habilidades. O projeto é um desafio de FrontEnd do site FrontEnd Mentor.'
    }
    if (contador == 3) {
        title.innerHTML = "Tic-Tac-Toe Game"
        desc.innerHTML = "Jogo da Velha"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/TicTacToeGame/")
        mobileimg.style.backgroundImage = "url('./images/designs/tic-tac-toe-preview.jpg')"
        text.innerHTML = 'Um Projeto pessoal de um Jogo da velha, criado puramente com HTML, CSS E JS. O jogo conta os modos contra IA e Player vs Player. Este é outro desafio do FrontEndMentor.'


    }
})
const cont = document.querySelector('.cont')
const butao2 = document.querySelector('.btn2').addEventListener('click', function () {
    console.log('oak')
    ++contador
    cont.innerHTML = `0${contador}/03`
    if (contador > 3) {
        cont.innerHTML = '03/03'
        contador = 3
    }
    if (contador == 1) {
        title.innerHTML = "Planet Facts Site"
        desc.innerHTML = "WebPage"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/PLANET-FACTS/")
        mobileimg.style.backgroundImage = "url('./images/designs/terra.jpg')"
        text.innerHTML = 'Um Projeto pessoal de uma página contando os fatos sobre todos os planetas do nosso sistema solar. A página está Full-Responsiva e foi feita usando NodeJS(Express), CSS e Javascript. Desafio do site frontendmentor.'
    }
    if (contador == 2) {
        title.innerHTML = "SuunySide Landing Page"
        desc.innerHTML = "Landing Page"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/SuunySide-Page/")
        mobileimg.style.backgroundImage = "url('./images/designs/desktop-preview-sunny.jpg')"
        text.innerHTML = 'Um Projeto pessoal de uma landing Page criada puramente com HTML, CSS E JS com o intuito de por em prática minhas habilidades. O projeto é um desafio de FrontEnd do site FrontEnd Mentor.'

    }
    if (contador == 3) {
        title.innerHTML = "Tic-Tac-Toe Game"
        desc.innerHTML = "Jogo da Velha"
        linkbtn.setAttribute('href', "https://samyrmarjoub.github.io/TicTacToeGame/")
        mobileimg.style.backgroundImage = "url('./images/designs/tic-tac-toe-preview.jpg')"
        text.innerHTML = 'Um Projeto pessoal de um Jogo da velha, criado puramente com HTML, CSS E JS. O jogo conta os modos contra IA e Player vs Player. Este é outro desafio do FrontEndMentor.'

    }
})
const nameh1 = document.querySelector('.name')
setTimeout(function () {
    nameh1.style.visibility = 'visible'
    var i = 0;
    // var A = 0;
    var tag = document.querySelector(".group");
    var html = document.querySelector(".name").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 50;
    function typeWriter() {
        if (i <= txt.length) {
            document.querySelector(".name").innerHTML = txt.slice(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}, 1000)

setTimeout(function () {
    resume.style.visibility = 'visible'
    var i = 0;
    // var A = 0;
    var tag = document.querySelector(".group");
    var html = document.querySelector(".resume").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 50;
    function typeWriter() {
        if (i <= txt.length) {
            document.querySelector(".resume").innerHTML = txt.slice(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}, 2800)
setTimeout(function () {
    endresume.style.visibility = 'visible'
    endresume.style.opacity = '1'
    endresume.style.marginLeft = '0'
    btnmain.style.visibility = 'visible'
    btnmain.style.opacity = ' 1'
    btnmain.style.marginLeft = '0'

}, 6200)

msg.addEventListener('keydown', function (e) {
    if (e.keyCode == 8) {
        --totala
    } else {
        ++totala
    }
    if (totala < 0) {
        totala = 0
    }
    if (totala >= 10) {
        msg.style.borderLeft = '5px solid #7CFC00'
    } else {
        msg.style.borderLeft = '5px solid red'
    }
    if (clickado && e.keyCode == 8) {
        msg.style.borderLeft = '5px solid red'
    }

})
nome.addEventListener('keydown', function (e) {
    if (e.keyCode == 8) {
        --totaln
    } else {
        ++totaln
    }
    if (totaln < 0) {
        totaln = 0
    }
    if (totaln >= 3) {
        nome.style.borderLeft = '5px solid #7CFC00'
    } else {
        nome.style.borderLeft = '5px solid red'
    }
    if (clickado && e.keyCode == 8) {
        nome.style.borderLeft = '5px solid red'
    }
})
email.addEventListener('keydown', function (e) {
    if (email.checkValidity()) {
        email.style.borderLeft = '5px solid #7CFC00'
    } else {
        email.style.borderLeft = '5px solid red'
    }
    if (clickado && e.keyCode == 8) {
        email.style.borderLeft = '5px solid red'
    }
})

function doubleClick() {
    clickado = true
}