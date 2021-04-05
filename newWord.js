class newWord {
    
}

let pool = ['confusion', 'classic', 'potential', 'excellent', 'glacial', 'trust', 'bittersweet', 'noise', 'polite', 'famous', 'trial','emotion','strike','crude', 'coalition']

let randomWord = pool[Math.floor(Math.random() * pool.length)]
console.log(randomWord);


let placeHolder = '';

for (let i = 0; i < randomWord.length; i++){
    placeHolder += '_ '
}

let placeHolderSpace = document.querySelector('.placeholder')

console.log(placeHolder)