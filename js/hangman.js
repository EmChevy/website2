const wordE1 = document.getElementById('word')
wrongLettersE1 = document.getElementById('wrong-letters')
const playAgainBtn = document.get.ElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = doucment.getElementById('notification-container')
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

    
}

displayWord()
