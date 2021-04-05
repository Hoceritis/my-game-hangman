class Keyboard {

}

let keys = document.querySelectorAll('.letter-style');
console.log(keys);

for(let i = 0; i < keys.length ; i++){
    keys[i].addEventListener('click', function(){
        console.log(keys.innerHTML);
    })
}


// keys.addEventListener('click', addElement)

// function addElement(){
//     return document.querySelectorAll('.letter-style').innerHTML;
// }

// for(i=0; i<keys.length; i++){
//     keys[i].addEventListener('click', )
// };