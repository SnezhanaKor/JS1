//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
//создан массив для записи результатов хода
var record = [];

/*Полная версия
do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}*/

//функция проверянт введенное значение
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}
//Домашнее заданиe
//Короткая версия
function answer(a1, a2, a3) {
    var ok = false;
    do {
        event = +prompt(a1 + a2 + a3 + "-1 - Выход из игры");
        if (event == -1) {
            return -1;
            break;
        } else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1:
            record.push([a1, a2]);
            break;
        case 2:
            record.push([a1, a3]);
            break;
        case -1:
            record.push([a1, "Вышли из игры"]);
            break;
    }
    return event;
}
//
switch (answer(works.a00, works.a1, works.a2)) {
    case 1: //первое действие - если в первом окне ввели 1 то открывает серию окон - окно 2.
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1: //второе действие, если во 2 окне ввели 1 то переходим на 4
            case 2: //если ввели 2, то так же переходим на 4
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: //второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case 2: //первое действие если в 1 окне ввели то переходим к 3 окну
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: //второе действие, если во 2 окне ввели 1 то переходим на 4
            case 2: //если ввели 2, то так же переходим на 4
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: //второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case -1:
        break;
    default:
        alert("Ошибка");
}
alert("Cпасибо за игру!");
//Показать результат хода
console.log(record);
var step = +prompt("Введите номер хода, чтобы узнать его результат: ");
var stepHistory = "В ходе № " + step + " " + record[step - 1][0] + "Ваш выбор " + record[step - 1][1];
alert(stepHistory);