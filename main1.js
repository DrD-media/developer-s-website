/*Практическая работа № 1 */
console.log('ПРАКТИЧЕСКАЯ РАБОТА № 1');
console.log('_______________________');
console.log('№ 1');
let x = undefined;
if (typeof x === 'number'){
    console.log('number');
}   else if (typeof x === 'symbol'){
    console.log('symbol');
}
    else if (typeof x === 'boolean'){
    console.log('boolean');
}
    else if (typeof x === 'undefined'){
    console.log('undefined');
}
    else if (typeof x === 'Biglnt'){
    console.log('Biglnt');
}
    else if (typeof x === 'object'){
    console.log('object');
}
    else if (typeof x === 'string'){
    console.log('string');
}
else if (typeof x === 'null'){
    console.log('null');
}
console.log('_______________________');
console.log('№ 1');
let zodiacS = prompt("Введите свой знак зодиака:");
switch (zodiacS) {
    case "Овен": alert("Привет, Овен!"); break;
    case "Телец": alert("Привет, Телец!"); break;
    case "Близнецы": alert("Привет, Близнецы!"); break;
    case "Рак": alert("Привет, Рак!"); break;
    case "Лев": alert("Привет, Лев!"); break;
    case "Дева": alert("Привет, Дева!"); break;
    case "Весы": alert("Привет, Весы!"); break;
    case "Скорпион": alert("Привет, Скорпион!"); break;
    case "Стрелец": alert("Привет, Стрелец!"); break;
    case "Козерог": alert("Привет, Козерог!"); break;
    case "Водолей": alert("Привет, Водолей!"); break;
    case "Рыбы": alert("Привет, Рыбы!"); break;
    default: alert("Неизвестный знак зодиака.");
}
console.log('_______________________');
console.log('№ 2');
//for
for (let i = 1; i <= 40; i++) {
    console.log(i);
}
//while
let a = 1;
while (a <= 40) {
    console.log(a);
    a++;
}
//do...while
let b = 1;
do {
    console.log(b);
    b++;
}   while (b <= 40);
console.log('_______________________');
console.log('№ 3');
console.log('Закомментированно /* */');
// setInterval(() => {
//   alert("с постоЯнно повторЯющемся сообщением");
// }, 1000);
console.log('_______________________');
console.log('№ 4');
let n1 = prompt("Введите первое число:");
let n2 = prompt("Введите второе число:");
let n3 = prompt("Введите третье число:");
let sortedNums = [n1, n2, n3].sort((a, b) => a - b);
console.log("Отсортированные числа:", sortedNums);
console.log('_______________________');
console.log('№ 5');
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
    console.log(`${i} - четное`);
    } else {
    console.log(`${i} - нечетное`);
    }
}
console.log('_______________________');
console.log('№ 6');
let num = prompt("Введите число больше 5:");
while (num <= 5 || isNaN(num)) {
    num = prompt("Неверный ввод. Введите число больше 5:");
}
alert("Поздравляем! Число действительно больше 5.");
console.log('_______________________');
console.log('№ 7');
for (let i = 8; i <= 20; i += 2) {
    if (i % 2 ==0){
        console.log(i);
    }
}
console.log('_______________________');
console.log('№ 8');
let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log("Сумма:", sum);
console.log('_______________________');
console.log('№ 9');
let numb = prompt("Введите трехзначное число:");
if (numb < 100 || numb > 999) {
    alert("Введено не трехзначное число.");
} 
else {
    let numbString = numb.toString();
    let sum = 0;
    for (let i = 0; i < numbString.length; i++) {
        let digit = numbString[i];
        sum += digit ** 3;
    }
    if (sum === numb) {
        alert("Введенное число является числом Армстронга.");
    } 
    else {
        alert("Введенное число не является числом Армстронга.");
    }
}
console.log('_______________________');
console.log('№ 10');
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log('_______________________');


/* Кнопка смены темы*/ 
let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.Tema'); /*.themeToggle*/ 

const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
}
const disableDarkStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null);
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark'){
        enableDarkStyle();
    } else {
        disableDarkStyle();
    }
});