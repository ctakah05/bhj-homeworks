const ddi = document.querySelectorAll('.dropdown__item')
const ddv = document.querySelector('.dropdown__value');
const ddl = document.querySelector('.dropdown__list');
let activeDd = ddv;
//for (){
//    ddv[i].onclick {}
ddv.onclick = function () {
    activeDd.classList.remove('dropdown__list_active');
    ddl.classList.add('dropdown__list_active');
    activeDd = this;
}
//}
// let activeMenu = activeDd.querySelectorAll('.dropdown__item') и дальше нижнее от activeMenu
for (let i=0;i<ddi.length;i++){
    ddi[i].onclick = function(){
        ddv.textContent = ddi[i].querySelector('.dropdown__link').textContent;
        ddl.classList.remove('dropdown__list_active');
        return false;
    }   
}
// в коментах примерный код для множества менюшек.