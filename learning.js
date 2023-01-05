//ПРИКЛАД ССИЛОЧНИХ ЗМІННИХ
/* let data = {
    a: 17,
    b: 'Word'
}

let newData = data //НОВА ЗМІННА newData ЯКА ПОСИЛАЄТЬСЯ НА ПОПЕРЕДНЮ ЗМІННУ data
newData.c = false

console.log(newData.c) */



//ПРИКЛАД ЗМІНИ ТИПУ ЗМІННОЇ З ФУНКЦІЇ НА ЧИСЛО
/* function a() {
    console.log('Yo Hed')
}

a = 10
a() */



//ПРИКЛАД ПОМИЛКИ ПІД ЧАС ЗМІНИ ЗНАЧЕННЯ ЗМІННОЇ
/* const a = () => {
    console.log('Yo Hed')
}

a() // 'Yo Hed'
a = 10 //Appear the following error: TypeError: Assignment to constant variable.
a() */



//ВИКЛИК ВЛАСТИВОСТІ ОБ'ЄКТА myCity
/* const myCity = {
    city: 'Lviv',
    popular: true,
    country: 'Ukraine'
}

console.log(myCity.city) */



//ПРИКЛАД ПРИСВОЮВАННЯ ІНШОГО ЗНАЧЕННЯ ДЛЯ ВЛАСТИВОСТІ ОБ'ЄКТА myCity
/* const myCity = {
    city: 'Lviv',
    popular: true,
    country: 'Ukraine'
}

myCity.city = 'Kyiv'//Нове значення властивості city об'єкта myCity

console.log(myCity.city) */



//ДОДАВАННЯ НОВОЇ ВЛАСТИВОСТІ ДЛЯ ОБ'ЄКТА myCity
/* const myCity = {
    city: 'Lviv'
}
console.log(myCity)

myCity.popular = true //Додавання нової властивості popular у об'єкт myCity
myCity.country = 'Ukraine' //Додавання нової властивості country у об'єкт myCity
console.log(myCity) */



//ПРИКЛАД ВИДАЛЕННЯ ВЛАСТИВОСТІ У ОБ'ЄКТІ ІЗ ДОПОМОГОЮ ОПЕРАТОРА delete
/* const myCity = {
    city: 'Lviv',
    popular: true,
    country: 'Ukraine'
}

console.log(myCity)

delete myCity.popular //Видалення властивості popular із об'єкта myCity
console.log(myCity) */



//РОБОТА ІЗ ВЛАСТИВОСТЯМИ ОБ'ЄКТА ЗА ДОПОМОГОЮ КВАДРАТНИХ СКОБОК []
/* const myCity = {
    city: 'Lviv'
}

myCity['popular'] = true //Створення нової властивості з назвою popular і присвоєння їй значення true
console.log(myCity)

const countryProperName = 'country' //Створення змінної countryProperName, яка має значення country
myCity[countryProperName] = 'Ukraine' //Створення нової властивості, яка візьме значення із змінної countryProperName. А воно дорівнює country. І тоді присвоїть цій властивості country значення Ukraine
console.log(myCity) */



//ПРИКЛАД ВКЛАДЕНИХ ОБ'ЄКТІВ info, ЯК ВЛАСТИВІСТЬ У ІНШОМУ ОБ'ЄКТІ myCity
/* const myCity = {
    city: 'Lviv',
    info: {             //Об'єкт info є вкладенним об'єктом myCity. і в свою чергу info також має свої властивості
        isPopular: true,
        country: 'Ukraine'
    }
}

console.log(myCity.info.country) 

delete myCity.info.isPopular       //Приклад видалення властивості вкладенного об'єкта за допомогою крапки
delete myCity.info['country']       //Приклад видалення властивості вкладенного об'єкта за допомогою квадратних скобок []

console.log(myCity) */



//ПРИКЛАД ВИКОРИСТАННЯ ЗАВЧАСНО СТВОРЕННИХ ЗМІННИХ ДЛЯ ВИКОРИСТАННЯ ЇХ У ОБ'ЄКТІ
/* const userName = 'Hed'
const userAge = 30

const userProfile = {
    userName: userName,
    userAge: userAge,
    hasSigned: false
}

console.log(userProfile) */

//АНАЛОГІЧНИЙ ВАРІАНТ, АЛЕ З ВИКОРИСТАННЯМ СКОРОЧЕННОГО ЗАПИСУ ВЛАСТИВОСТЕЙ
/* const userName = 'Hed'
const userAge = 30

const userProfile = {
    userName,
    userAge,
    hasSigned: false
}

console.log(userProfile) */



//МЕТОДИ. Метод - це властивість об'єкта, значення якого це функція
/* const myCity = {
    city: 'Lviv',
    cityGreeting: function () {     //Позначення функції
        console.log('Greeting!')
    }
}

myCity.cityGreeting() */        //Виклик метода

//або ж:

/* const myCity = {
    city: 'Lviv',
    cityGreeting() {        //Позначення функції
        console.log('Greeting!')
    }
}

myCity.cityGreeting()  */      //Виклик метода



//СТВОРЕННЯ НОВОГО ОБ'ЄКТА НА ОСНОВІ ПОПЕРЕДНЬОГО

//Варіант 1:
/* const user = {      //Створення першого об'єкта
    userId: 12,
    userName: 'Bob'
}

const user2 = Object.assign({}, user)     //Створення другого об'єкта user2 на основі попереднього user
user2.userId = 23     //Зміна значення властивості userId у другому об'єкті user2. Але не зачепаючи першого об'єкта user

console.log(user.userId)
console.log(user2.userId) */


//Варіант 2:
/* const user = {      //Створення першого об'єкта
    userId: 12,
    userName: 'Bob'
}

const user2 = {...user}       //Створення другого об'єкта userTwo на основі попереднього user (... - це оператор розділення об'єкта на властивості)
user2.userName = 'Mike'       //Зміна значення властивості userName у другому об'єкті user2. Але не зачепаючи першого об'єкта user

console.log(user.userName)
console.log(user2.userName) */

//Варіант 3:
/* const user = {      //Створення першого об'єкта
    userId: 12,
    userName: 'Bob'
}

const user2 = JSON.parse(JSON.stringify(user))      //Створення другого об'єкта userTwo на основі попереднього user із допомогою парсування (JSON.parse) та розпарсування (JSON.stringify)
user2.userName = 'Mike'

console.log(user.userName)
console.log(user2.userName) */



//ФУНКЦІЇ

/* let a = 5
let b = 3

function sum(a, b) {        //Створення функції sum, яка сумує два числа і виводить результат
    const c = a + b
    console.log(c)
}

sum(a, b)       //Виклик функції sum
a = 12
b = 8
sum(a, b)  */      //Виклик функції sum


//СТВОРЕННЯ ФУНКЦІЇ ЯКА ПОВЕРТАЄ ЗНАЧЕННЯ РЕЗУЛЬТАТУ ОБЧИСЛЕННЯ
/* function myFun(a, b) {      //Оголошення функції
    let c
    a = a - 1
    c = a + b
    return c        //Повертає значення с
}

a = 5
b = 2
console.log(myFun(a, b)) */        //Вивід результату роботи функції



//ВИКЛИК ФУНКЦІЇ !!!
/* function myFun(a, b) {      //Створення функції (a та b це змінні, яким буде присвоєне значення Аргументів (11 та 2) під час виклику функції)
    let c
    a = a - 1
    c = a + b
    return c        //Повертає значення с
}
//myFun(11, 2)     //Виклик функції myFun (11 та 2 це є Аргументи функції)
//console.log(myFun(11, 2))  //Виклик функції myFun і вивід результату у консоль
let result = myFun(11, 2)       //Присвоєння результату функції myFun змінній result
console.log(result)  */    //Вивід змінної result у консоль



//СТВОРЕННЯ КОПІЇ ОБ'ЄКТА І ЙОГО ВИКОРИСТАННЯ У ФУНКЦІЇ 
/*ОПИС: 
Ми створюємо об'єкт personOne.
Далі створюємо функцію increasePersonAge, у якій ми створюємо змінну(об'єкт) updatedPerson, яка буде копією об'єкту personOne для 
використання в середині функції.
Тобто після цього об'єкт updatedPerson буде мати тіж самі властивості як і об'єкт personOne (тобто age і userName).
Після цього у функції ми збільшуємо на 1 властивість age об'єкта updatedPerson. І повертаємо результат за допомогою return.
Далі створюємо нову змінну updatedPersonOne і присвоюємо їй результат виклику функції increasePersonAge, аргументом якого буде об'єкт personOne.
Тобто по факту, ми взяли властивості об'єкта personOne, створили його копію(updatedPerson) всередині функції, збільшили значення властивості
age на одиницю, і результат цих обчислень записали у змінну updatedPersonOne. І вивели цей результат у консоль.
*/
/* const personOne = {     //Створення об'єкта (це наш зовнішній об'єкт з яким ми будемо працювати, але не змінюючи його)
    age: 20,
    userName: 'Hed'
}

function increasePersonAge (person) {
    const updatedPerson = Object.assign({}, person)     //Створення нової змінної(так званої копії) на основі person
    updatedPerson.age += 1      //Тут ми збільшуємо значення age на 1
    return updatedPerson        //І тут повертаємо результат після збільшення age на 1
}

const updatedPersonOne = increasePersonAge(personOne)       //Виклик функції increasePersonAge з аргументом personOne. Цей personeOne підставляється на місце person у функції
console.log(personOne.age)
console.log(updatedPersonOne.age) */



//CALLBACK ФУНКЦІЇ
//Приклад колбек функції:
/* function anotherFunction(){
    //there is some actions
}

function fnWithCallback(callbackFunction){
    callbackFunction()
}

fnWithCallback(anotherFunction) */


/* function printMyName() {
    console.log('HED')
}

setTimeout(printMyName, 1000) */       //Вбудована в JS функція setTimeout робить затримку на 1000мс після чого виконує функцію яку ми створили вище printMyName



//ОБЛАСТІ ВИДИМОСТІ - Вони визначають кордони дії змінних. Є Глобальні і Локальні області. Це можуть бути змінні і тд.
//Приклад:

//Оголошення  Глобальних змінних a та b:

/* let a
let b 

function myFn() {
    let b       //Оголошення Локальної змінної b
    a = true
    b = 10
    console.log(b)      //Тут виведеться число 10, тому що буде викликана Локальна змінна b
}

myFn()

console.log(a)      // Тут буде вивід true
console.log(b)      // Тут буде вивід undefined, тому що буде викликана Глобальна змінна b */



//ЛАНЦЮГ ОБЛАСТІ ВИДИМОСТІ
/* const a = 7   */   //Тут ми об'явили змінну a у Глобальній області видимості

/*Далі ми створюємо функцію myFn і всередині неї створюємо ще одну функцію innerFn у якій ми викликаємо console.log(a)
Що відбувається коли console.log(a) намагається знайти змінну a: він спочатку шукає у області innerFn-не знаходить змінної a. Йде далі і шукає в області myFn-не знаходить.
Йде далі і шукає у Глобальній області, де вже і знаходить змінну a значення якої дорівнює 7.
*/
/* function myFn() {       
    function innerFn() {
        console.log(a)      //Буде виведено число 7.
    }
    innerFn()
}

myFn()
innerFn()   */     //Тут ми отримаємо помилку, тому що такої змінної/функції як innerFn не існує у Глобальній області видимості. Вона існує тільки всередині області видимості myFn



//ОПЕРАТОРИ!!!  Оператор - це по факту вбудована функція в мову програмування
/*
Арифметичні оператори: 
+ Додати 
- Відняти
* Помножити
/ Розділити

Оператори порувняння: 
=== Дорівнює
!== Не дорівнює
<= Більше або дорівнює
>= Менше або дорівнює

Логічні оператори:
! Ні
&& і
||  або (или)

Оператор присвоювання:
= Присвоювання

Текстові оператори:
delete видаляє властивість значення
new 
typeof перевіряє тип значення
instanceof перевіряє принадлежність об'єкта тому чи іншому класу
*/


//ОПЕРАТОР ... - завдяки цьому оператору можна створити новий об'єкт(redButton) на основі іншого(button) . Але значення об'єкту button при цьому НЕ змінюються
/* const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton) //Вивід у вигляді таблиці */


//КОНКАТЕНАЦІЯ РЯДКІВ за допомогою знака +
/* const hello = 'Hello'
const world = 'World'

const greeting = hello + ' ' + world

console.log(greeting) */


//КОНКАТЕНАЦІЯ РЯДКІВ за допомогою ШАБЛОННИХ РЯДКІВ. Шаблонні рядки позначаю наступним чином `${значення/змінна} ${значення/змінна} ${значення/змінна}`
/* const hello = 'Hello'
const world = 'World'

const greeting = `${hello} ${world}`

console.log(greeting) */

//ДОМАШНЄ ЗАВДАННЯ:
/* const myNameIs = 'Мене Звати'
const name = 'Стас'
const iAmFrom = 'Я З Міста'
const city = 'Львів'

const result = `${myNameIs} ${name} ${iAmFrom} ${city}`

console.log(result) */



//ФУНКЦІОНАЛЬНІ ВИРАЗИ
/* const myFunction = function(a, b) {     //function - це і є функціональний вираз. Тобто функція починається з function(a, b) і т.д.. А const myFunction - це змінна
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFunction(5, 3)) */


//ФУНКЦІОНАЛЬНИЙ ВИРАЗ У ВИКЛИКУ ІНШОЇ ФУНКЦІЇ
/* setTimeout(function() {
    console.log('Відкладене повідомлення')
}, 1000) */


//СТРІЛОЧНА ФУНКЦІЯ ( не має імені та позначається за рахунок => ) . Також треба розуміти, що стрілочна функція є Виразом
/* (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
} */


//Приклад, як дати ім'я Стрілочній функції
/* const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction(5, 3) // 9 */


//Стрілочна Функція у виклику іншої функції
/* setTimeout( () => {
    console.log('MESSAGE!')
}, 1000) */


//Варіанти скорочення Стрілочних функцій:

// #1 - Якщо функція має тільки один параметр "a".
/* (a) => {
    //Тіло функції
}

// #2 - Якщо тіло функції складається тільки із одного виразу "a + b"
(a, b) => a + b  */        //У такому випадку функція автоматично вертає результат її роботи.



//ЗНАЧЕННЯ ПАРАМЕТРІВ ФУНКЦІЇ ПО ЗАМОВЧЮВАННЮ !!!

/*Приклад №1:
 function multByFactor(value, multiplier = 1) {
return value * multiplier
}

console.log(multByFactor(10,2))      //20
console.log(multByFactor(5))     //5 */



//ЗНАЧЕННЯ ПАРАМЕТРІВ ФУНКЦІЇ ПО ЗАМОВЧЮВАННЮ, ВИКОРИСТОВУЮЧИ СИНТАКСИС "АНОНІМНИХ ФУНКЦІОНАЛЬНИХ ВИРАЗІВ"
/* const anonFunc = function(value, multiplier = 1){
    return value * multiplier
}

console.log(anonFunc(10, 2))        //20
console.log(anonFunc(5))        //5 */



//ЗНАЧЕННЯ ПАРАМЕТРІВ ПО ЗАМОВЧЮВАННЮ, ВИКОРИСТОВУЮЧИ СИНТАКСИС "СТРІЛОЧНИХ ФУНКЦІЙ"
/* const arrowFunc = (value, multiplier = 1) => {
    return value * multiplier
}

console.log(arrowFunc(5, 2))        //10
console.log(arrowFunc(3))   */     //3



//ЗНАЧЕННЯ ПАРАМЕТРІВ ФУНКЦІЇ ПО ЗАМОВЧЮВАННЮ
//Приклад №2:
/* const newPost = (post, addedAt = Date()) => ({      //  ({}) - це є неявне повернення об'єкта. Date() - це функція яка повертає дату.
    ...post,        // ... - розкладає об'єкт на властивості
    addedAt,        // addedAt бере значення по замовчюванню, а саме Date() і додає його до об'єкта
})

const firstPost = {
    id: 1,
    author: 'Hed',
}

console.log(newPost(firstPost)) */

//Використання явного повернення об'єкта у ЗНАЧЕНІ ПАРАМЕТРІВ ФУНКЦІЇ ПО ЗАМОВЧЮВАННЮ
/* const newPost = function(post, addedAt = Date()){      
   let addedDate = {
    ...post,
    addedAt,
   }
   return addedDate
}

const firstPost = {
    id: 1,
    author: 'Hed',
}

console.table(newPost(firstPost)) */



//ОПРАЦЮВАННЯ ПОМИЛОК
/* const fnWithError = () => {
    throw new Error('Some error')
}

fnWithError()

console.log('Continue...')  */     //В результаті виконання коду зупиниться на fnWithError і я побачу помилку "Uncaught Error: Some error"

//ЯК БОРОТИСЬ З ТАКИМИ ПОМИЛКАМИ ЯК ЗАЗНАЧЕНО ВИЩЕ
//Приклад конструкції
/* try {
    //Виконання блоку кода
}
catch (error) {
    //Цей блок виконається у випадку виникнення помилки у блоці "try"
} */


//ПРИКЛАД РОБОТИ "try/catch":
/* const fnWithError = () => {
    throw new Error ('Some error')
}
try{
    fnWithError()
}
catch (error){
    //console.error(error)        //console.error використовується для того щоб піймати помилку і вивести її на екран саме як помилку, але код далі виконується, бо помилка піймана
    console.log(error.message)      //такий варінт просто покаже повідомлення 'Some error', яке ми вказали на початку у функції fnWithError і продовжить виконання коду далі
}
console.log('Try one more time...') */



//ІНСТРУКЦІЇ: Інструкції зазвичай закінчуються крапкою з комою (;) АЛЕ у JS можна опускати крапку з комою. Тому раніше ми її і не використовували.
//Приклади:
/* let a;
const b = 5;
if (a > b) {
    console.log('a is larger');     //тут інструкцією є саме "console.log('a is larger');" Примітка: після фігурних скобок ";" не потрібна.
}
for (let i = 0; i++; i=5) {
    console.log(i);     //тут інструкцією є саме "console.log(i);" Примітка: після фігурних скобок ";" не потрібна.
} */

//ВИРАЗИ-ІНСТРУКЦІЇ:
/* 'abc';
a = a + 3;
c = a + b;
d = 'Good ' + 'Evening';
myFunction(c, d);
console.log('Hey'); */



//МАСИВИ: (нумерація елементів масиву починається з нуля)
//Приклад 1:
/* const myArray = [1, 2, 3]
console.log(myArray)    //[1, 2, 3]
//Приклад 2:
const myArray2 = new Array(1, 2, 3)
console.log(myArray2) */


//Порівняння масивів:
/* const myArray = [1, true, 'HED']
const myArray2 = [1, true, 'HED']
const result1 = myArray === myArray2        //false - тому що myArray та myArray2 це два різні об'єкти, які зберігаються у двох різних ячейках пам'яті(тобто це дві різні силки)
console.log(result1)
//Але якщо створити myArray3 який буде дорівнювати myArray - то це буде посилання myArray3 на myArray, і тоді вони будуть однаковими
//Приклад:
const myArray3 = myArray
const result2 = myArray === myArray3        //true
console.log(result2) */


//ЯК ПРАЦЮВАТИ З ЕЛЕМЕНТАМИ МАСИВА:
//Приклад: 
/* const myArray = [1, true, 'HED']
console.log(myArray[0])     //1
console.log(myArray[1])     //true  
console.log(myArray[2])     //HED
console.log(myArray.length) */     //3 - довжина масива(тобто кількість елементів у масиві)

//Зміна кількості елементів у масиві (ТАК РОБИТИ НЕ РЕКОМЕНДУЄТЬСЯ)
/* const myArray = [1, true, 'HED']
console.log(myArray.length)     //3
myArray.length = 7      //Тут ми перепризначили довжину масива на 7 елементів, три із яких ми створили і 4 пустих об'єкти
console.log(myArray.length)     //7
console.log(myArray)  */       //Результат такого виводу: [ 1, true, 'HED', <4 empty items> ]

//Як додавати нові елементи у масив:
/* 
//Приклад 1:
const myArray = [1, 2, 3, 4]
console.log(myArray)        //[1, 2, 3, 4]
console.log(myArray.length)     //4

myArray[2] = 'abc'      //Зміна значення 3-го елемента масива з цифри 3 на 'abc'

console.log(myArray)        //[1, 2, 'abc', 4]
console.log(myArray[2])     //'abc'

myArray[4] = true       //Додавання нового елемента у масив

console.log(myArray)        //[1, 2, 'abc', 4, true]
console.log(myArray.length)  */    //5 - нова довжина елементу, тому що ми додали новий елемент 'true'

//Приклад 2:
/* const myArray = []      //Створення пустого масиву
console.log(myArray.length)     //0 - довжина масиву

myArray[1] = true       //додавання нового елемента масиву(а саме 2го ел-та) із значенням 'true'
myArray[3] = 'HED'      //додавання нового елемента масиву (а саме 4го ел-та) із значенням 'HED'
console.log(myArray)        //[ <1 empty item>, true, <1 empty item>, 'HED' ]
console.log(myArray.length)  */    //Довжина масиву = 4

//МЕТОДИ МАСИВІВ(функції вищого порядку в масивах): (викликаються через крапку: myArray.length або myArray.push). Методів велика кількість, і усіх них можна переглянути через крапку
//PUSH: Додає новий елемент у кінець масиву
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

myArray.push(4)     //додаємо новий елемент зі значенням "4", у лапках вказуємо значення останнього елемента (наприклад '4', 'HED', 'true' і т.п.)
console.log(myArray)        //[1, 2, 3, 4]

myArray.push(true)
console.log(myArray) */        //[1, 2, 3, 4, true]

//POP: Видаляє останній елемент у масиві. Окрім того pop повертає значення яке він видалив. Тобто результат можна присвоїти змінній і вивести це значення.
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

myArray.pop()     //видаляємо останній елемент масиву
console.log(myArray)        //[1, 2]

const removedElement = myArray.pop()        //видаляємо останній елемент масиву і присвоюємо значення цього елемента змінній removedElement
console.log(myArray)        //[1]
console.log(removedElement)  */    //2

//UNSHIFT: Додає новий елемент у початок масиву
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]
myArray.unshift(true)       //додаємо новий елемент у початок масиву
console.log(myArray)  */       //[true, 1, 2, 3]

//SHIFT: Видаляє перший елемент масиву
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

myArray.shift()
console.log(myArray) */        //[2, 3]

//FOREACH: у цьому методі передається коллбек функція (ми самі вказуємо, що саме буде робити ця функція) яка буде працювати з кожним елементом масива
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

myArray.forEach(el => console.log(el * 2))      //в результаті у консоль виведетуться числа 2, 4, 6 (тобто кожен елемент масиву, по черзі, множиться на 2 і виводиться на екран)

console.log(myArray)  */       //[1, 2, 3] Оригінальний масив при цьому не змінився

//MAP: у цьому методі також передається коллбек функція. Але метод MAP повертає новий масив
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

const newArray = myArray.map(el => el * 3)      //map повертає новий масив [ 3, 6, 9 ] із результату коллбек функції яка вказана у лапках 

console.log(newArray)       //результат виклику MAP
console.log(myArray)   */      //оригінальний масив не змінюється

//або ж може бути такий запис: у ньому використовується ЯВНЕ повернення результату функції 
/* const myArray = [1, 2, 3]
console.log(myArray)        //[1, 2, 3]

const newArray = myArray.map((el) => {
     return el * 3     //map повертає новий масив [ 3, 6, 9 ] із результату коллбек функції яка вказана у фігурних лапках 
})
// або ж:
const newArray2 = myArray.map(function (el) {
    return el * 3     //map повертає новий масив [ 3, 6, 9 ] із результату коллбек функції яка вказана у фігурних лапках
})
console.log(newArray)       //результат виклику MAP
console.log(newArray2) 
console.log(myArray) */        //оригінальний масив не змінюється



//ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ: дозволяє створювати нові змінні із властивостей якогось іншого об'єкта
//Приклад:
/* const userProfile = {
    name: 'HED',
    commentsQty: 23,
    hasSignedAgreement: false,
}
//Далі ми оголошуємо нові змінні і присвоюємо їм значення на основі начень властивостей об'єкта userProfile
const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name)       //HED
console.log(commentsQty)     //23
console.log(hasSignedAgreement)  */    //false


//ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ:
/* const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)       //Apple
console.log(fruitTwo)  */      //Banana


//ДЕСТРУКТУРИЗАЦІЯ У ФУНКЦІЯХ:
/* const userProfile = {
    name: 'HED',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))  */      //User HED has 23 comments



//УМОВНІ ІНСТРУКЦІЇ: 
// if; if...else; else...if; switch; тернарний оператор;
// IF: якщо Умова правдива, блок коду виконується. Якщо не правдива, блок коду не виконується
/* if (Умова) {
    //Блок кода, який виконується ОДИН РАЗ, якщо Умова правдива!!!
} */
//Приклад :
/* let val = 10

if (val > 5) {      //якщо змінна val більше 5, то виконується блок коду
    val += 20       //до змінної val додаємо 20 і присвоюємо змінній val нове значення
}

console.log(val)  */       //30

//Приклад2: якщо у об'єкті person не існує властивості name, то на екрані з'явиться повідомлення
/* const person = {
    age: 15,
}
//Далі у if ми перевіряємо, чи є властивість name у об'єкта person, і чи вона має якесь значення. 
//Символ "!" говорить: якщо властивості name не існує або має значення false, undefined, 0, 'пустий рядок', то виконати блок коду з виводом тексту
if (!person.name) {     
    console.log("There is no User Name!")
}
//Тут ми перевіряємо чи значення age < 18, і якщо це true, то виконується блок коду
if (person.age < 18) {
    console.log("Access denied! You are under 18 years old!")
}
 */


//IF ELSE:
/* if (Умова) {
    //Блок кода, який виконується ОДИН РАЗ, якщо Умова Вірна
}
else {
    //Блок кода, який виконується ОДИН РАЗ, якщо Умова НЕ Вірна
}
 */

//Приклад:
/* let val = 10

if (val < 5) {      //умова val < 5 поверне значення false(бо val=10), тому блок коду if не виконається, а виконається блок коду else
    val += 20       //рівносильно val = val + 20
} else {
    val -=20        //рівносильно val = val - 20
}

console.log(val)        //-10
 */

