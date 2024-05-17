const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemptsLabel = document.getElementById(`attemptsLabel`);
let messageLabel = document.getElementById(`message`);
const submitButton = document.getElementById(`submitbtn`);
console.log(answer);

let attempts = 0;

let running = true;

submitButton.onclick = function(){
    if(running){
        let guess = Number(document.getElementById(`guess`).value);
        attempts++;
        
        if(guess < answer){
            messageLabel.textContent = `GUESS HIGHER!`
        }
        else if(guess > answer){
            messageLabel.textContent = `GUESS LOWER!`
        }
        else{
            messageLabel.textContent = `YOU GUESSED RIGHT`
            
            running = false;
        }
        attemptsLabel.textContent = `TOTAL ATTEMPTS: ${attempts} `;
    }
}



