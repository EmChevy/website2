const wordE1 = document.getElementById('word')
wrongLettersE1 = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

// Show hidden word
function displayWord() {
    wordE1.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')
    }
    `

    const innerWord = wordE1.innerText.replace(/\n/g, '')

    if (innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!'
        popup.style.display = 'flex'
    }
}

// Update the wrong letters
function updateWrongLettersE1() {
    // Display wrong letters
    wrongLettersE1.innerHTML = `
        ${wrongLetters.length > 0 ? '<P>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `
    // Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length

        if (index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    })

    // Check if lost
    if (wrongLetters.length == figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost!'
        popup.style.display = 'flex'
    }
}

// Show Notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}


// Keydown letter press
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key

        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter)

            displayWord()
        } else {
            showNotification()
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter)

            updateWrongLettersE1()
        } else {
            showNotification()
        }
    }
})

// Restart game and play again
playAgainBtn.addEventListener('click')

displayWord()
