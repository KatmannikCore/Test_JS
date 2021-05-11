let AddTest = document.querySelector('.eee');

let resultArray = [];

let begin = document.querySelector(".begin");
let counter = 1;
AddTest.onclick = function() {

    let question = prompt("Введите вопрос: ");
    resultArray.push(counter + ". " + question);
    counter++;

    let arryRadio = [];
    for (let i = 0; i < 4; i++) {
        let value = prompt("Введите вариант ответа: ");
        arryRadio.push(value);
    }
    resultArray.push(arryRadio);
    let Answer = prompt("Введите номер/номера правильного ответа: ");

}
let name = " ";
begin.onclick = function() {

    let j = 1;
    for (let i = 0; i < resultArray.length; i++) {

        if (i % 2 == 0) {
            PrintQuestion(resultArray[i]);
        } else {
            PrintRadoi(resultArray[i], "Radioclass" + j);
            j++;
        }
    }
    AddButton();
    ButtomDisabled();
}

function PrintRadoi(arrayRadio, name) {
    for (let i = 0; i < arrayRadio.length; i++) {
        var radioBut = document.createElement('input');
        radioBut.setAttribute('type', 'radio');
        radioBut.setAttribute('name', name);
        radioBut.setAttribute('class', name)
        radioBut.setAttribute('value', i + 1);
        document.body.appendChild(radioBut);

        var labelValue = document.createElement('label');
        labelValue.innerHTML = arrayRadio[i];
        document.body.appendChild(labelValue);

        var br = document.createElement('br');
        document.body.appendChild(br);
    }
}

function PrintQuestion(question) {
    var labelValue = document.createElement('div');
    labelValue.innerHTML = question;
    document.body.appendChild(labelValue);
}

function AddButton() {
    var button = document.createElement('button');
    button.innerHTML = "Проверить";
    button.setAttribute('class', "check");
    document.body.appendChild(button)
}

function ButtomDisabled() {
    AddTest.setAttribute('disabled', 'disabled');
    begin.setAttribute('disabled', 'disabled');
}

document.querySelector('.check').onclick = function() {
    let data;
    for (let i = 0; i < resultArray.length / 2; i++) {
        let radio = document.querySelectorAll(".Radioclass" + Number(i + 1));
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                data = radio[i].value;
                console.log(data);
                break;
            }
        }
    }

}