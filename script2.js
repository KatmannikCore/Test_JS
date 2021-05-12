let AddTest = document.querySelector('.eee');

let resultArray = [];
let AnswersArray = [];
let TextArray = [];
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

    AnswersArray.push(Answer.split(","));
    console.log(AnswersArray);
}
let name = " ";

begin.onclick = function() {
    let j = 1;
    for (let i = 0; i < resultArray.length; i++) {

        if (i % 2 == 0) {
            PrintQuestion(resultArray[i]);
            TextArray.push(resultArray[i]);
        } else {
            PrintRadoi(resultArray[i], "Radioclass" + j);
            j++;
        }
    }
    ButtomDisabled();
    VisibleButtonCheck()
}

var element = document.getElementById('button');

function PrintRadoi(arrayRadio, name) {
    for (let i = 0; i < arrayRadio.length; i++) {
        var radioBut = document.createElement('input');
        radioBut.setAttribute('type', 'checkbox');
        radioBut.setAttribute('name', name);
        radioBut.setAttribute('class', name)
        radioBut.setAttribute('value', i + 1);
        element.appendChild(radioBut);

        var labelValue = document.createElement('label');
        labelValue.innerHTML = arrayRadio[i];
        element.appendChild(labelValue);

        var br = document.createElement('br');
        element.appendChild(br);
    }
}

function PrintQuestion(question) {
    var labelValue = document.createElement('div');
    labelValue.innerHTML = question;
    element.appendChild(labelValue);
}

function ButtomDisabled() {
    AddTest.setAttribute('disabled', 'disabled');
    begin.setAttribute('disabled', 'disabled');
}

function VisibleButtonCheck() {
    document.querySelector('.check').style.display = 'block';

}
let WrongAnswerText = [];
let WrongAnswerNumber;
document.querySelector('.check').onclick = function() {

    WrongAnswerNumber = 0;
    let data;
    for (let j = 0; j < TextArray.length; j++) {
        let checkedRadioTrue = 0;
        let radio = document.querySelectorAll(".Radioclass" + Number(j + 1));
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                data = radio[i].value;
                if (data == AnswersArray[j]) {
                    checkedRadioTrue = i + 1;
                    break;
                }
            }
        }
        if (checkedRadioTrue == 0)
            WrongAnswerText.push(TextArray[j]);
        else
            WrongAnswerNumber++;
    }
    Print();
}

function Print() {
    let result;
    if (WrongAnswerNumber == TextArray.length)
        result = "\nВаш результат " + WrongAnswerNumber + " из " + TextArray.length + ". Вы молодец!";
    else {
        result = "Вы неправильно ответили на вопросы:\n\n"
        for (let i = 0; i < WrongAnswerText.length; i++)
            result += WrongAnswerText[i] + "\n";
        result += "\nВаш результат " + WrongAnswerNumber + " из " + TextArray.length;
    }
    alert(result);
}