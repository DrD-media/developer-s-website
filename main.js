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

if(styleMode === 'dark'){
    enableDarkStyle();
}

/* анимации при скролле*/ 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains("_anim-no-hide")){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

/* Кнопка регулировки Аа*/
let styleMod = localStorage.getItem('styleMod');
const styleToggle2 = document.querySelector('.Tema2'); /*.themeToggle*/ 

const enableAStyle = () => {
    document.body.classList.add('Astyle');
    localStorage.setItem('styleMod', 'A');
}
const disableAStyle = () => {
    document.body.classList.remove('Astyle');
    localStorage.setItem('styleMod', null);
}

styleToggle2.addEventListener('click', () => {
    styleMod = localStorage.getItem('styleMod');
    if(styleMod !== 'A'){
        enableAStyle();
    } else {
        disableAStyle();
    }
});

if(styleMod === 'A'){
    enableAStyle();
}
