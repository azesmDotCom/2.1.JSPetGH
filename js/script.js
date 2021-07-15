'use strict';

//console.log(4);
//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//leftBorderWidth = 15;
//console.log(leftBorderWidth);


//const obj = {
//    a: 50
//};

//obj.a = 10;
//console.log(obj);

//Простые типы - примитивы.

//Числа 1,2,3



//let number = 4.6;

//console.log(-4/0);
//console.log('string' * 9);



//Строки 'string', 'name'

//const persone = 'Alex';

//Логический тип (Boolean)

//true/false

//null

//undefined

//Symbol

//BigInt


//Объекты

//Спецобъекты

//Массивы []

//Функции function

//Объект Даты

//Регулярные выражения

//Ошибки

//alert('Hello');


//const result = confirm('Life is good?');
//console.log(result);

//const answer = prompt('You older 18?', '');
//console.log(typeof(answer));

//const result = confirm(`Are you here?`);
//console.log(result);

//const answer = +prompt(`You 18 years old?`, `20`);
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt(`Как ваше имя?`, ``);
//answers[1] = prompt(`Как ваши дела?`, ``);
//answers[2] = prompt(`How old you?`, ``);

//document.write(answers);

//console.log(typeof(answers));

//const category = `toys`;

//console.log(`https://someurl.com/S{category}/5`);

//const user = 'Ivan';

//alert(` Hello, ${user}`);

//console.log(4 + " - object");

//let incr = 10,
//    decr = 10;

//++incr;
//--decr;

//console.log(incr++);
//console.log(decr--);

//const isChecked = false,
//    isClose = false;

//    console.log(isChecked || !isClose);



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


//-----------------------2.9------------------------------

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

//-----------------------2.9------------------------------


//-----------------------2.10------------------------------

//if (4 == 9) {
//    console.log('Ok!');
//} else {
//    console.log('Error');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {

//}



//-----------------------2.10 Условия---------------------

//if (4 == 4) {
//    console.log('OK!');
//} else {
//console.log ('Error');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error');
//}   else if (num > 100) {
//    console.log('Много');
//}   else {
//    console.log('OK');
//}

//(num === 50) ? console.log('OKi') : console.log('Error');


//const num = 50;

//switch (num) {
//    case 49:
//        console.log('Неверно');
//        break;
//    case 100:
//        console.log('Неверно');
//        break;
//    case 51:
//        console.log('Верно');
//        break;
//    default:
//        console.log('Не в этот раз');
//        break;
//}


//-----------------------2.10 Условия------------------------------


//-----------------------2.11 Циклы------------------------------

//let num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);

//for (let i = 1; i < 10; i++) {
//    if (i === 7) {
//        //break;
//        continue;
//    }
//    console.log(i);

//}

//-----------------------2.11 Циклы------------------------------



//-----------------------2.9------------------------------
// Задание на урок: N 1

//1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
//'Сколько фильмов вы уже посмотрели?'

//2) Создать объект personalMovieDB и в него поместить такие свойства:
//    - count - сюда передается ответ на первый вопрос
//    - movies - в это свойство поместить пустой объект
//    - actors - тоже поместить пустой объект
//    - genres - сюда поместить пустой массив
//    - privat - в это свойство поместить boolean(логическое) значение false

//3) Задайте пользователю по два раза вопросы:
//    - 'Один из последних просмотренных фильмов?'
//    - 'На сколько оцените его?'
//Ответы стоит поместить в отдельные переменные
//Записать ответы в объект movies в формате: 
//    movies: {
//        'logan': '8.1'
//    }

//Проверить, чтобы все работало без ошибок в консоли 




//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

//-----------------------2.9------------------------------


//-----------------------2.12------------------------------
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//        b = prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a !='' && b != '' && a.length < 30) {
//        personalMovieDB.movies[a] = b;
//        console.log('done');
//    } else{
//        console.log('error');
//        i--;
//    }

//}

//if (personalMovieDB.count < 10) {
//    console.log('Просмотрено довольно мало фильмов');
//} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы классический зритель');
//} else if ( personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
//} else {
//    console.log('Произошла ошибка');
//}

//console.log(personalMovieDB);

//-----------------------2.12------------------------------

//-----------------------2.13 function------------------------------


//let num = 20;

//function showFirstMessage(text) {
//    console.log(text);
//    //let num = 10;
//    console.log(num);
//}

//showFirstMessage('Hello world!');
//console.log(num);

//function calc(a,b) {
//    return (a + b);
//}

//console.log(calc(4, 3));
//console.log(calc(5, 6));
//console.log(calc(10, 6));

//function ret() {
//    let num = 505;
//    return num;
//}

//const anotherNum = ret();
//console.log(anotherNum);



//const logger = function() {
//    console.log('Hello');
//};


//logger();


//const calc = (a, b) => { return a + b };



//-----------------------2.13 function------------------------------

//-----------------------2.14 методы и свойства------------------------------

//const str = "teSt";
//const arr = [1, 2, 4];

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str);


//const fruit = 'Some fruit';

//console.log(fruit.indexOf('q'));

//const logg = 'Hello world';

//console.log(logg.slice(6, 11)); вырезать 6 начало, 11-конец

//console.log(logg.substring(6, 11));вырезать 6 начало, 11-конец

//вырезать 6 начало, 5количество символов
//console.log(logg.substr(6, 2));

//const num = 2.875452485888;

//console.log(Math.round(num));


//const test = '12.2px';

//console.log(parseInt(test));
//console.log(parseFloat(test));


//-----------------------2.14 методы и свойства------------------------------

//-----------------------2.15 ------------------------------
//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//        b = prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a !='' && b != '' && a.length < 30) {
//        personalMovieDB.movies[a] = b;
//        console.log('done');
//    } else{
//        console.log('error');
//        i--;
//    }

//}

//if (personalMovieDB.count < 10) {
//    console.log('Просмотрено довольно мало фильмов');
//} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы классический зритель');
//} else if ( personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
//} else {
//    console.log('Произошла ошибка');
//}

//console.log(personalMovieDB);

//-----------------------2.15 ------------------------------

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


//let numberOfFilms;

//function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
//}

//start();

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};



//function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//        const a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');

//        if (a != null && b != null && a != '' && b != '' && a.length < 30) {
//            personalMovieDB.movies[a] = b;
//            console.log('done');
//        } else {
//            console.log('error');
//            i--;
//        }
//    }
//}

//rememberMyFilms();

//function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//        console.log('Просмотрено довольно мало фильмов');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//        console.log('Вы классический зритель');
//    } else if (personalMovieDB.count >= 30) {
//        console.log('Вы киноман');
//    } else {
//        console.log('Произошла ошибка');
//    }
//}

//detectPersonalLevel();

//function showMyDB(hidden) {
//    if (!hidden) {
//        console.log(personalMovieDB);
//    }
//}

//showMyDB(personalMovieDB.privat);

//console.log(personalMovieDB);

//function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//        personalMovieDB.genres[i - 1] = genre;
//    }
//}

//writeYourGenres();

//-----------------------2.15 ------------------------------

//-----------------------2.16 callback function ------------------------------

//function first() {
//    //что-то делается
//    setTimeout(function() {
//        console.log(1);
//    }, 500);
//}
//function second() {
//    console.log(2);
//}

//first();
//second();

//function lernJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
//}

//function done() {
//    console.log('Я прошел этот урок!');
//}

//lernJS('JavaScript', done);


//-----------------------2.16 callback function ------------------------------

//-----------------------2.17 объекты ------------------------------

//const obj = new Object();

//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    }
//};

//console.log(options.name);

//delete options.name;

//console.log(options);

//for (let key in options) {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//}








//-----------------------2.17 объекты ------------------------------

//___________________________________________3.10 Function

//const num = new Function(3);
//console.log(num);

//function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//        console.log(`Hello ${this.name}`);
//    };
//}

//User.prototype.exit = function() {
//    console.log(`Пользователь ${this.name} ушел`);
//}

//const  ivan = new User('Ivan', 28);
//const alex = new User('Alex', 20);

//ivan.exit();

//ivan.hello();
//alex.hello();

//console.log(ivan);
//console.log(alex);


//___________________________________________3.10 FunctionEnd



//___________________________________________3.11 This

//1.Простой вызов функции . Обычная функция: this = window, но если use strict(строгий режим), то undefinded

//function showThis(a, b) {
//    console.log(this);
//    function sum() {
//        console.log(this);
//        return a + b;
//    }
//    console.log(sum());
//}

//showThis(4, 5);



//2.Контекст у методов объекта будет сам объект

//const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//        function shout() {
//            console.log(this);
//        }
//        shout();
//    }
//};
//obj.sum();

//3. This  в консруктивах и классах это новый экземпляр объекта

//function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//        console.log('Hello!' + this.name);
//    };
    
//}


//let ivan = new User('Ivan', 23);



//3. This: call, apply, ручная привязка

//function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
//}

//const user = {
//    name: 'John'
//};
//sayName.call(user, ' Black');
//sayName.apply(user, [' Black']);

//function count(num) {
//    return this*num;
//}

//const double = count.bind(2);
//console.log(double(3));
//console.log(double(21));


//const btn = document.querySelector('button');

//btn.addEventListener('click', function() {
//    //console.log(this);
//    this.style.backgroundColor = 'yellow';
//});

//const obj = {
//    num: 5,
//    sayNumber: function() {
//        const say = () => {
//            console.log(this.num);
//        };

//        say();
//    }
//};

//obj.sayNumber();

//обычная запись стрелочной функции

//const double = (a) => {
//    return a * 2;
//};

//укороченная запись стрелочной функции

//const double = a =>  a * 2;
//console.log(double(4));

//3.12 Классы

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }

    calaArea() {
        return this.height * this.width;
    }
}

class ColoredRectanglWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectanglWithText(25, 10, 'Hello!', 'yellow');

div.showMyProps();
console.log(div.calaArea());



//const square = new Rectangle(10, 10);
//const long = new Rectangle(20, 100);

//console.log(square.calaArea());
//console.log(long.calaArea());



















