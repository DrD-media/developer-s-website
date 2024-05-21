/*Практическая работа № 2*/
console.log('ПРАКТИЧЕСКАЯ РАБОТА № 2');
console.log('_______________________');
console.log('№ 1');
function Privet() {
    alert(`Привет пользователь!`);
}
Privet()
console.log('_______________________');
console.log('№ 2');
function greetUser() {
    let name = document.getElementById("name").value;
    if (name) {
        alert(`Привет, ${name}!`);
    } 
    else {
        alert("Введите свое имя.");
    }
}
console.log('_______________________');
console.log('№ 3');
const min = (a, b) => Math.min(a, b);
console.log('_______________________');
console.log('№ 4');
/*a, b, c*/
let a = 4;
let b = 4;
let c = -3;
function quadrYrav() {
    const D = b**2 - 4*a*c;
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2*a);
        const x2 = (-b - Math.sqrt(D)) / (2*a);
        console.log(x1);
        console.log(x2);
        } else if (D === 0) {
            const x = -b / (2 * a); 
            console.log(x);
        } else {
            console.log('корней нет');
        }
}
quadrYrav()
console.log('_______________________');
console.log('№ 5');

console.log('- - -');

console.log('_______________________');
console.log('№ **');
const resEl = document.getElementById('result');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const sub = document.getElementById('chet');
const plbtn = document.getElementById('plus');
const mnbtn = document.getElementById('minus');
const ymnbtn = document.getElementById('ymn');
const delbtn = document.getElementById('del');

plbtn.onclick = () =>{
    action = '+';
}
mnbtn.onclick = () =>{
    action = '-';
}
ymnbtn.onclick = () =>{
    action = '*';
}
delbtn.onclick = () =>{
    action = '/';
}

sub.onclick = () =>{
    if (action == '+'){
        res = Number(inp1.value) + Number(inp2.value);
        resEl.textContent = res;
    }
    if (action == '-'){
        res = Number(inp1.value) - Number(inp2.value);
        resEl.textContent = res;
    }
    if (action == '*'){
        res = Number(inp1.value) * Number(inp2.value);
        resEl.textContent = res;
    }
    if (action == '/'){
        res = Number(inp1.value) / Number(inp2.value);
        resEl.textContent = res;
    }
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


/*for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
    console.log("* ");
    }
    console.log();
  }*/



  /*let a = 4;
let b = 4;
let c = 3;*/
/*function solveQuadratic(a, b, c) {
    const D = b**2 - 4*a*c;
    if (D < 0) {
    return [];
    }
    const x1 = (-b + Math.sqrt(D)) / (2*a);
    const x2 = (-b - Math.sqrt(D)) / (2*a);
    return [x1, x2];
  }
  const k = 4; /*k 1*/
  /*const y = 4; /*y 2*/
  /*const c = 3; /*1*/
  /*const roots = solveQuadratic(a, b, c);
console.log(roots);*/