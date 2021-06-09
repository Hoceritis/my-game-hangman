let numberOflives = 6;
let correctGuess = [];
let poolOfWords = ['confusion', 'classic', 'potential', 'excellent', 'glacial', 'trust', 'bittersweet', 'noise', 'polite', 'famous', 'trial','emotion','strike','crude', 'coalition']
let total = 0;

let div3 = document.querySelector('.div3');

document.querySelector('.trashtalk').style.display = 'none';

let head = document.querySelector('.head');
head.style.display = "none";

let body = document.querySelector('.body')
body.style.display = "none";

let leftArm = document.querySelector('.left-arm')
leftArm.style.display = "none";

let rightArm = document.querySelector('.right-arm')
rightArm.style.display = "none";

let leftLeg = document.querySelector('.left-leg')
leftLeg.style.display = "none";

let rightLeg = document.querySelector('.right-leg')
rightLeg.style.display = "none";

//this could be an object ?

let thrashtalk = ["Lol, you can't spell : ", "Really ? Repeat after me : ", "Please, open your dictionary and look for : "];
let randomTT = thrashtalk[Math.floor(Math.random() * thrashtalk.length)]
console.log(randomTT)
let thrashtalkDiv = document.querySelector('.trashtalk')


let kudos = ['Nice ! Praised be the Genius Guesser ', 'Bravo ! Your sublime intellect has unveiled the thruth ', 'Damn ! You broke the game']
let kudosRand = kudos[Math.floor(Math.random() * kudos.length)]
console.log(kudosRand)
let kudosRandDiv = document.querySelector('.trashtalk');

let currentWord = poolOfWords[Math.floor(Math.random() * poolOfWords.length)]
console.log(currentWord);

let keys = document.querySelectorAll('.letter-style');

let totalPoints = document.querySelector('.score');

//

for(let i = 0; i < keys.length ; i++){
    keys[i].addEventListener('click', function(){
        if(currentWord.includes(keys[i].innerText.toLowerCase()) && !correctGuess.includes(keys[i].innerText.toLowerCase())) {
            correctGuess.push(keys[i].innerText.toLowerCase());
            keys[i].style.background = '#42AD42';
        } else if (!currentWord.includes(keys[i].innerText.toLowerCase())){
            numberOflives -= 1;
            keys[i].style.background = '#E05E4A';
            switch (numberOflives) {
                case 5:
                    head = document.querySelector('.head')
                    head.style.display = "block";
                    break;
                case 4:
                    head = document.querySelector('.head').style.display = "block";
                    body = document.querySelector('.body').style.display = "block";
                    break;
                case 3:
                    head = document.querySelector('.head').style.display = "block";
                    body = document.querySelector('.body').style.display = "block";
                    leftArm = document.querySelector('.left-arm').style.display = "block";
                    break;
                case 2:
                    head = document.querySelector('.head').style.display = "block";
                    body = document.querySelector('.body').style.display = "block";
                    leftArm = document.querySelector('.left-arm').style.display = "block";
                    rightArm = document.querySelector('.right-arm').style.display = "block";
                    break;
                case 1: 
                    head = document.querySelector('.head').style.display = "block";
                    body = document.querySelector('.body').style.display = "block";
                    leftArm = document.querySelector('.left-arm').style.display = "block";
                    rightArm = document.querySelector('.right-arm').style.display = "block";
                    leftLeg = document.querySelector('.left-leg').style.display = "block";
                    break;
                case 0:
                    head = document.querySelector('.head').style.display = "block";
                    body = document.querySelector('.body').style.display = "block";
                    leftArm = document.querySelector('.left-arm').style.display = "block";
                    rightArm = document.querySelector('.right-arm').style.display = "block";
                    leftLeg = document.querySelector('.left-leg').style.display = "block";
                    rightLeg = document.querySelector('.right-leg').style.display = "block";
                    break;
                }
        }
        display();
        livesCounter();
    })
}

function livesCounter (){
    if(numberOflives < 1){
        thrashtalkDiv.innerText = randomTT + `${currentWord}`;
        thrashtalkDiv.style.display = 'block';
            thrashtalkDiv.style.fontSize = '40px';
            thrashtalkDiv.style.fontStyle = 'sans-serif';
            thrashtalkDiv.style.color = 'black';
        document.querySelector('.div3').style.display = "none";
        reset();
        total = 0;
        totalPoints.innerHTML = total;
    } 
}

function reset(){
    numberOflives = 6;
    correctGuess = [];
    keys = document.querySelectorAll('.letter-style')
    keys.forEach(function(key){
        key.style.background = '#756057';
    })
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
    placeHolderSpace.style.fontSize = '40px';
    if(currentWord === placeHolderSpace.innerHTML.replace(/\s/g, '')) {
        document.querySelector('.div3').style.display = "none";
        kudosRandDiv.innerText = kudosRand;
        kudosRandDiv.style.fontSize = '40px';
        kudosRandDiv.style.fontStyle = 'sans-serif';
        kudosRandDiv.style.display = 'block';
        kudosRandDiv.style.color = 'black';
        //change the kudos style
        total++;
        totalPoints.innerHTML = total;
    }
}

document.querySelector('#new-game').addEventListener('click', function(){
    currentWord = getNewWord(poolOfWords, currentWord)
    display();
    // randomT();
    // kudosR();
    console.log(currentWord)
    document.querySelector('.div3').style.display = "flex";
    document.querySelector('.trashtalk').style.display = 'none';
    document.querySelector('.head').style.display = "none";
    document.querySelector('.body').style.display = "none";
    document.querySelector('.left-arm').style.display = "none";
    document.querySelector('.right-arm').style.display = "none";
    document.querySelector('.left-leg').style.display = "none";
    document.querySelector('.right-leg').style.display = "none";
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


//  function kudosR(){
//      return kudosRand;
//  }

//  function randomT(){
//      return randomTT;
//  }

