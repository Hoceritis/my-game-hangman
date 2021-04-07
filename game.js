let numberOflives = 6;
let correctGuess = [];
let poolOfWords = ['confusion', 'classic', 'potential', 'excellent', 'glacial', 'trust', 'bittersweet', 'noise', 'polite', 'famous', 'trial','emotion','strike','crude', 'coalition']



let currentWord = poolOfWords[Math.floor(Math.random() * poolOfWords.length)]
console.log(currentWord);

let keys = document.querySelectorAll('.letter-style');

for(let i = 0; i < keys.length ; i++){
    keys[i].addEventListener('click', function(){
        if(currentWord.includes(keys[i].innerText.toLowerCase()) && !correctGuess.includes(keys[i].innerText.toLowerCase())) {
            correctGuess.push(keys[i].innerText.toLowerCase())
        } else if (!currentWord.includes(keys[i].innerText.toLowerCase())){
            numberOflives -= 1;
        }
        display();
        liveCounter();
        console.log(correctGuess);
        console.log(numberOflives);
    })
}

function liveCounter (){
    if(numberOflives < 1) window.alert('You lose!');
}

function reset(){
    numberOflives = 6;
    correctGuess = [];
}

function display(){

    let placeHolder = '';

    for (let i = 0; i < currentWord.length; i++){
        if(correctGuess.includes(currentWord[i])){
            placeHolder += `${currentWord[i]} `
        } else {
            placeHolder += '_ '
        }
    }
    let placeHolderSpace = document.querySelector('.placeholder')
    placeHolderSpace.innerHTML = placeHolder;
    if(currentWord === placeHolderSpace.innerHTML.replace(/\s/g, '')) window.alert('You won!')

}


let button = document.querySelector('#new-game').addEventListener('click', function(){
    currentWord = getNewWord(poolOfWords, currentWord)
    display();
    console.log(currentWord)
})

function getNewWord(wordsArray, currentWord){
    const randomIndex = Math.floor((Math.random() * wordsArray.length));
    const chosenWord = wordsArray[randomIndex];
 
    if (chosenWord === currentWord) {
        return getNewWord();
    }
    reset();
    return chosenWord;
 }