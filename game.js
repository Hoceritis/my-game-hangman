const numberOflives = 6;


//button = 
{/* <button id="new-game">
  New game
  </button>
  CSS
  
  #new-game {
    background: #43a3e6;
    border: 1px solid #43a3e6;
    border-radius: 6px;
    box-shadow: 1px 1px 2px #999;
    color: #fff;
    padding: 6px 14px;
    outline: 0;
  } */}


let pool = ['confusion', 'classic', 'potential', 'excellent', 'glacial', 'trust', 'bittersweet', 'noise', 'polite', 'famous', 'trial','emotion','strike','crude', 'coalition']

let randomWord = pool[Math.floor(Math.random() * pool.length)]
console.log(randomWord);

let correctGuess = []
//1/ If the letter is within the randomWord , then it would be pushed into correct guess
//using includes

let keys = document.querySelectorAll('.letter-style');

for(let i = 0; i < keys.length ; i++){
    keys[i].addEventListener('click', function(){
        if(randomWord.includes(keys[i].innerText.toLowerCase()) && !correctGuess.includes(keys[i].innerText.toLowerCase())) {
            correctGuess.push(keys[i].innerText.toLowerCase())
        }
        display();
        console.log(correctGuess);
    })
}

function display(){

    //Display should be nested within a "new word" button
    //in order to trigger the dashes before trying to guess a word (add event listener) ?
    

    let placeHolder = '';

    for (let i = 0; i < randomWord.length; i++){
        if(correctGuess.includes(randomWord[i])){
            placeHolder += `${randomWord[i]} `
        } else {
            placeHolder += '_ '
        }
    }
    let placeHolderSpace = document.querySelector('.placeholder')
    placeHolderSpace.innerHTML = placeHolder;  
    
}



//having the charactere + the remaining dashes
//checking the length of the string
//keep track of how many time the users press something


