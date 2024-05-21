/*Практическая работа № 3 */
console.log('ПРАКТИЧЕСКАЯ РАБОТА № 3');
console.log('_______________________');
console.log('№ 1');
let arr11 = ['h','e','l','l','o']
let arr12 = new Array('h','e','l','l','o');
let arr13 = Array.of('h','e','l','l','o');
console.log('_______________________');
console.log('№ 2');
console.log(arr11);
console.log(arr11[4]); /* до */
arr11[4] = 'p';
console.log(arr11);
console.log(arr11[4]); /* после */
console.log('_______________________');
console.log('№ 3');
let arrlen = document.getElementById(`but`);
arrlen.addEventListener('mouseover', ( )=> {
    document.getElementById(`but`).innerText = (arr11.length);
}) 
console.log('_______________________');
console.log('№ 4');
let arr14 = ['h','e','l','p','o'];
for (let e = 0; e <arr14.length; e++) {
    console.log(arr14[e]);
}
console.log('|- - -|');
arr14.forEach(item => {
    console.log(item);
  });
  console.log('_______________________');
  console.log('№ 5');
let arr111 = ['1','2','3','4','5'];
let arr112 = ['6','7','8','9','10'];
let arr113 = [...arr111, ...arr112];
console.log(arr113);
for (let t = 0; t <arr113.length; t++) {
    console.log(arr113[t]);
}
console.log('_______________________');
console.log('№ 6');
arr113.shift();
console.log(arr113);
console.log('_______________________');
console.log('№ 7');
arr113.pop();
console.log(arr113);
console.log('_______________________');
console.log('№ 8');
arr113.unshift('11');
console.log(arr113);
console.log('_______________________');
console.log('№ 9');
const inputArray = prompt("Введите массив значений, разделенных запятыми:").split(",");
const squareRootArray = inputArray.map(value => {
  if (!isNaN(value) && value !== "") {
    return Math.sqrt(Number(value));
  } else {
    return "Неверный ввод";
  }
});
console.log(squareRootArray);
console.log('/////////////////////////////////////////////////////////////////////////////////////////////');
console.log('№ 9');
setInterval(() => {
    document.getElementById(`Data1`).innerText = Date();
}, 1000)
console.log('_______________________');
console.log('№ 10');
const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const today = new Date(); 
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  console.log(`${day}`, `${month}`, `${year}`, 'года');  
console.log('_______________________');
console.log('№ 11');
  function ProizvedRandomNumbers() {
    const Num1 = Math.floor(Math.random() * 50); 
    const Num2 = Math.floor(Math.random() * 50); 
    const proizved = Num1 * Num2; 
    console.log(proizved); 
}
ProizvedRandomNumbers();
console.log('_______________________');


/* Кнопка смены темы*/ 
let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.Tema');

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