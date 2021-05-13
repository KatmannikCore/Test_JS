let AddTest = document.querySelector('.eee');

let resultArray = ["1. Что из перечисленного не явлеятся языком программирования?", ["HTML", "Java", "Python", "DevOps"],
    "2. Какие из видов тестирования могут быть автоматизированны ?", ["UI тестирование", "Юзабилити тестирование", "Тестирование совместимости", "Unit тестирование"],
    "3. Выберите вариант,который соотвествует следущему предложению : Известно, что грымзик обязательно или полосат, или рогат, или то и другое вместе", ["Грымзик не может быть безрогим", "Грымзик не может быть однотонным и безрогим одновременно", "Грымзик не может быть полосатым и безрогим одновременно", "Грымзик не может быть однотонным и рогатым одновременно"],
    "4. Выберите тип алгоритмов, которых не существует?", ["Алгоритм с ветвлением", "Циклический безусловный", "Циклический с параметром", "Алгоритм с углублением"],
    "5. Какая(какие) из следующих конструкций используется(используются) для ветвления?", ["switch case", "if else", "do while", "for"],
    "6. Какого (каких) метода (методов) тестирования не существует?", ["Метод белого ящика", "Метод игры в ящик", "Метод кротовой норы", "Метод серого ящика"]

];
let AnswersArray = [
    ["1", "4"],
    ["1", "3", "4"],
    ["2"],
    ["1", "4"],
    ["1", "2"],
    ["3", "4"]
];
let TextArray = [];
let begin = document.querySelector(".begin");
let counter = 7;
AddTest.onclick = function() {
    QuestionAdd();
}

function QuestionAdd() {
    let question = prompt("Введите вопрос: ");
    if (question == "")
        alert("Вы не ввели текст вопроса. Попробуйте добавить вопрос заново.");
    else {
        resultArray.push(counter + ". " + question);
        counter++;
        CheckboxAdd();
    }
}
let IsEmptyData = true;

function CheckboxAdd() {
    IsEmptyData = false;
    let arrCheckbox = [];
    let checkCheckbox = true;
    let i;
    for (i = 0; i < 4; i++) {
        let value = prompt("Введите вариант ответа: ");
        if (value == "") {
            checkCheckbox = false;
            break;
        }
        arrCheckbox.push(value);
    }
    if (checkCheckbox) {
        resultArray.push(arrCheckbox);
        AnswerAdd();
    } else {
        alert("Вы не ввели текст " + Number(i + 1) + " варианта ответа.Попробуйте добавить вопрос заново. " + Number(i + 1) + " - номер вопроса.");
        resultArray.pop();
        counter--;

    }
}


function AnswerAdd() {
    let Answer = prompt("Введите номер/номера правильного ответа: ");
    if (Answer == "")
        alert("Вы не введи павильные вариаты ответов. Попробуйте добавить вопрос заново.");
    else {
        AnswersArray.push(Answer.split(","));
        IsEmptyData = true;
    }
}
let name = " ";

document.querySelector(".begin").onclick = function() {
    console.log(resultArray);
    if (IsEmptyData) {
        let j = 1;
        for (let i = 0; i < resultArray.length; i++) {

            if (i % 2 == 0) {
                PrintQuestion(resultArray[i]);
                TextArray.push(resultArray[i]);
            } else {
                PrintRadoi(resultArray[i], "Radioclass" + Number(j));
                j++;
            }
        }
        ButtonDisabled();
        VisibleButtonCheck()
    } else {
        alert("Вопросы введены не корректно");
    }
}

var element = document.getElementById('defaultQuestions');
//создание чекбоксов
function PrintRadoi(arrayRadio, name) {
    for (let i = 0; i < arrayRadio.length; i++) {
        //чекбокс
        var radioBut = document.createElement('input');
        radioBut.setAttribute('type', 'checkbox');
        radioBut.setAttribute('name', name);
        radioBut.setAttribute('class', name)
        radioBut.setAttribute('value', i + 1);
        element.appendChild(radioBut);
        //Надписи перед чекбоксом
        var labelValue = document.createElement('label');
        labelValue.innerHTML = arrayRadio[i];
        element.appendChild(labelValue);
        //Переход строки
        var br = document.createElement('br');
        element.appendChild(br);
    }
}
//создание вопроса
function PrintQuestion(question) {
    var labelValue = document.createElement('div');
    labelValue.innerHTML = question;
    element.appendChild(labelValue);
}
//Деакцивания кнопок
function ButtonDisabled() {
    AddTest.setAttribute('disabled', 'disabled');
    begin.setAttribute('disabled', 'disabled');
}
//Появление кнопки проверить
function VisibleButtonCheck() {
    document.querySelector('.check').style.display = 'block';
}
let WrongAnswerText = [];
let WrongAnswerNumber;

//Проверка теста
document.querySelector('.check').onclick = function() {
        WrongAnswerNumber = 0;
        let TrueAnswers = [];
        let IsEmptyCheckbox;
        for (let j = 0; j < TextArray.length; j++) {
            IsEmptyCheckbox = true;
            let radio = document.querySelectorAll(".Radioclass" + Number(j + 1));

            for (let i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    TrueAnswers.push(radio[i].value);
                    IsEmptyCheckbox = false;
                }
            }
            //сравнение массивов
            if (JSON.stringify(TrueAnswers) != JSON.stringify(AnswersArray[j]))
                WrongAnswerText.push(TextArray[j]);
            else
                WrongAnswerNumber++;
            TrueAnswers = [];
        }
        if (IsEmptyCheckbox)
            alert("Все вопросы должны иметь хотябы один выбраннй вариант ответа. Проверте правильность заполнения");
        else
            Print();
    }
    //Вывод результата теста во всплывающее окно
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
    Clear();
}
//Очистка данных
function Clear() {
    WrongAswerText = [];
    WrongAnswerNumber = 0;
    WrongAnswerText = [];
}