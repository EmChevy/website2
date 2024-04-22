cbtn = document.querySelector('.circle-btn')
ibtn = document.querySelector('.bug-btn')
hbtn = document.querySelector('.man-btn')
tbtn = document.querySelector('.keyboard-btn')
breakout = document.querySelector('.breakout')
insect = document.querySelector('.insect')
hangman = document.querySelector('.hangman')
typing = document.querySelector('.typing')


cbtn.addEventListener('click', () => {
    breakout.classList.toggle('active')
})


ibtn.addEventListener('click', () => {
    insect.classList.toggle('active')
})

hbtn.addEventListener('click', () => {
    hangman.classList.toggle('active')
})

tbtn.addEventListener('click', () => {
    typing.classList.toggle('active')
})
