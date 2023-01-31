const ml = document.getElementsByClassName('menu__link');
let activem;
for (let i = 0; i < ml.length ; i++) {
    ml[i].onclick = function () {
        activem = document.querySelector('.menu_active');
        if (activem) {
            activem.classList.remove('menu_active');
        }
        ml[i].parentElement.querySelector('.menu_sub').classList.add('menu_active');
        return false;
    }
}