/*Практическая работа № 4 */
console.log('ПРАКТИЧЕСКАЯ РАБОТА № 4');
console.log('_______________________');
console.log('№ 1');
var student = {};
var student = new Object();
console.log('_______________________');
console.log('№ 2');
var student = {
    name: 'Valera',
    age: '25',
    getname(){
        console.log(`my name is ${student.name}`);
    },

    getage(){
        console.log(`my age is ${student.age}`);
    }
};

student.getage();
student.getname();
console.log('_______________________');
console.log('№ 3');
var StudentsInpit = function(name, group, age, form_edu) {
    this.name = name;
    this.group = group;
    this.age = age;
    this.form_edu = form_edu;
    StudentsInpit.prototype.sayName = function() {
      return "I am" + this.name;
    }
    StudentsInpit.prototype.sayGroup = function() {
        return "I study in" + this.group;
    }
    StudentsInpit.prototype.sayAge = function() {
        return "I am" + this.age + "y.o.";
    }
    StudentsInpit.prototype.sayForm = function() {
        return "I have" + this.form_edu + "form education";
    }
}
console.log('_______________________');
console.log('№ 4');
console.log('Ключевое слово this используется для того, чтобы метод мог сослаться на вызвавший его объект.');
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