const questionCommencement = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1')
const btn2 = document.getElementById('btn-2') // meme chose juste c'est mieux
const reponse1 = document.querySelector('p')
var question = document.getElementById('question');




btn1.addEventListener('click', () => {

    reponse1.classList.add('show-reponse')
    reponse1.style.background = 'red'



})

btn2.addEventListener('click', () => {

    reponse1.classList.add('show-reponse')
    reponse1.style.background = 'green'




})
//---------------------------------------------
const mousemove = document.querySelector('.mousemove')

window.addEventListener('mousemove', (e) => {

    mousemove.style.left = e.pageX + 'px'
    mousemove.style.top = e.pageY + 'px'

})
window.addEventListener('mousedown', () => {
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)'
})
window.addEventListener('mouseup', () => {
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)'
})

//-------------------------------------------------------

const keyPress = document.querySelector(".keypress")
const key = document.getElementById("key")

/*const ring = (key) => {
const audio = new Audio()
audio.src = key + '.mp3'
audio.play()
}*/

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    //ring()
})

//----------------------------------------------------

const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {

    if (window.scrollY > 120) {
        nav.style.top = 0
    } else {
        nav.style.top = "-50px"
    }
})

//-------------------------------------------------------------

const inputName = document.querySelector('')