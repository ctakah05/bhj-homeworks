const mm = document.getElementById('modal_main');
const mc = document.getElementsByClassName('modal__close');
const ss = document.getElementsByClassName('show-success');
const ms = document.getElementById('modal_success');
mm.className = mm.className + " " + "modal_active";
for (let i = 0; i < mc.length ; i++) {
    mc[i].onclick = function () {
        mm.classList.remove('modal_active');
        ms.classList.remove('modal_active');
        console.log('close')
    }
}
ss[0].onclick = function () {
    mm.classList.remove('modal_active');
    ms.classList.add('modal_active'); 
}