const tab = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.tab__content');
for (let i=0;i<tab.length;i++){
    tab[i].onclick = function(){
        clearActive ();
        tab[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    }
}
function clearActive (){
    for (let i=0;i<tab.length;i++){
        tab[i].classList.remove('tab_active');
        content[i].classList.remove('tab__content_active');
    }
}