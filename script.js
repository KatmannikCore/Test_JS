let AddTest = document.querySelector('.eee');

let resultArray = [];

let begin = document.querySelector(".begin");
let counter = 1;
AddTest.onclick = function() {

    let question = prompt("Введите вопрос: ");
    resultArray.push(counter + ". " + question);
    counter++;


    for (let i = 0; i < 4; i++) {
        let value = prompt("Введите вариант ответа: ");
        resultArray.push(value);
    }

}
let name = " ";
begin.onclick = function() {
    console.log(resultArray);
    for (let i = 0; i < resultArray.length; i++) {

        if (i % 5 == 0) {
            PrintQuestion(resultArray[i]);
            name = resultArray[i];
        } else {
            PrintRadoi(resultArray[i], name);
        }
    }
    AddButton();
    ButtomDisabled();
}

function PrintRadoi(arrayRadio, name) {

    var radioBut = document.createElement('input');
    radioBut.setAttribute('type', 'radio');
    radioBut.setAttribute('name', name);
    document.body.appendChild(radioBut);

    var labelValue = document.createElement('label');
    labelValue.innerHTML = arrayRadio;
    document.body.appendChild(labelValue);

    var br = document.createElement('br');
    document.body.appendChild(br);

}

function PrintQuestion(question) {
    var labelValue = document.createElement('div');
    labelValue.innerHTML = question;
    document.body.appendChild(labelValue);
}

function AddButton() {
    var button = document.createElement('button');
    button.innerHTML = "Проверить";
    document.body.appendChild(button)
}

function ButtomDisabled() {
    AddTest.setAttribute('disabled', 'disabled');
    begin.setAttribute('disabled', 'disabled');
}