const range = 100;
const anwer = Math.ceil(Math.random()* range);
console.log(answer);

const inputTag = document.getElementaryById("input");
const resultDiv = document.getElementaryById("result");
const formBtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt");

let life = 5;
formBtn.onclick = (event) => {
    life -= 1;
    displayLife.textContent = life;
    const userInput = Number(inputTag.value);
    const result = document.createElement('h2');
    result.textContent = userInput + " ☞ ";

    if (userInput === answer) {
        result.textContent += "Answer";
        alert("You are correct!");
    }
    else {
        if (life > 0) {
            event.preventDefault();
            (userInput > answer) ? (result.textContent +="down"):(result.textContent +="up");
            inputTag.focus();
        }
        else {
            alert("You failed!/nThe anwer is " + answer);
        }
    }
    resultDiv.append(result);
    inputTag.value = ' ';
}