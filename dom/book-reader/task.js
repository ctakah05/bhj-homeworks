const bc = document.querySelector('.book__control_font-size').querySelectorAll('.font-size');
const bcolor = document.querySelector('.book__control_color').querySelectorAll('.color');
const bback = document.querySelector('.book__control_background').querySelectorAll('.color');
const bs = document.getElementById('book');
for (let i = 0;i < bc.length;i++){
    bc[i].onclick = function() {
        bs.classList.remove('book_fs-small','book_fs-big');
        if (bc[i].classList.contains('font-size_small')){
            bs.classList.add('book_fs-small');
            clearActive(bc,'font-size_active',bc[i]);
        } else if (bc[i].classList.contains('font-size_big')){
            bs.classList.add('book_fs-big');
            clearActive(bc,'font-size_active',bc[i]);
        } else {
            clearActive(bc,'font-size_active',bc[i]);
        }
        return false;
    }
}
for (let i = 0;i < bback.length;i++){
    bback[i].onclick = function() {
        bs.classList.remove('book_bg-black','book_bg-gray','book_bg-white');
        if (bback[i].classList.contains('bg_color_black')){
            bs.classList.add('book_bg-black');
            clearActive(bback,'color_active',bback[i]);
        } else if (bback[i].classList.contains('bg_color_gray')){
            bs.classList.add('book_bg-gray');
            clearActive(bback,'color_active',bback[i]);
        } else if (bback[i].classList.contains('bg_color_white')){
            bs.classList.add('book_bg-white');
            clearActive(bback,'color_active',bback[i]);
        }
        return false;
    }
}
for (let i = 0;i < bcolor.length;i++){
    bcolor[i].onclick = function() {
        bs.classList.remove('book_color-whitesmoke','book_color-gray','book_color-black');
        if (bcolor[i].classList.contains('text_color_black')){
            bs.classList.add('book_color-black');
            clearActive(bcolor,'color_active',bcolor[i]);
        } else if (bcolor[i].classList.contains('text_color_gray')){
            bs.classList.add('book_color-gray');
            clearActive(bcolor,'color_active',bcolor[i]);
        } else if (bcolor[i].classList.contains('text_color_whitesmoke')){
            bs.classList.add('book_color-whitesmoke');
            clearActive(bcolor,'color_active',bcolor[i]);
        }
        return false;
    }
}

function clearActive(name,clas,cur) {
    console.log(name)
    for (let i = 0; i < name.length; i++){
        name[i].classList.remove(clas)
    }
    cur.classList.add(clas);
}
