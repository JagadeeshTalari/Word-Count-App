const userInput = document.querySelector("#userInput");
let charactersCount = document.querySelector(".charactersCount");
let wordsCount = document.querySelector(".wordsCount");
let charCountResult = 0;
let wordCountResult = 0;

userInput.addEventListener( 'input', () => {
    if(userInput.value != ""){
    charCountResult = userInput.value.length;
    charactersCount.innerText = charCountResult;
    wordCountResult = userInput.value.trim(" ").split(" ").length;
    wordsCount.innerText = wordCountResult;
    }
    else{
        
        wordsCount.innerText = 0;
        charactersCount.innerText = 0;
    }
    
   
})