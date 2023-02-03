const bc = document.querySelector('.book__control_font-size').childNodes;
const bcolor = document.querySelector('.book__control_color').childNodes;
const bback = document.querySelector('.book__control_background').childNodes;
const bs = document.getElementById('book');
for (let i = 0;i < bc.length;i++){
    bc[i].onclick = function() {
        bs.classList.remove('book_fs-small','book_fs-big');
        if (bc[i].classList.contains('font-size_small')){
            bs.classList.add('book_fs-small');
        } else if (bc[i].classList.contains('font-size_big')){
            bs.classList.add('book_fs-big');
        } else {
        }
        return false;
    }
}
for (let i = 0;i < bback.length;i++){
    bback[i].onclick = function() {
        bs.classList.remove('book_bg-black','book_bg-gray','book_bg-white');
        if (bback[i].classList.contains('bg_color_black')){
            bs.classList.add('book_bg-black');
        } else if (bback[i].classList.contains('bg_color_gray')){
            bs.classList.add('book_bg-gray');
        } else if (bback[i].classList.contains('bg_color_white')){
            bs.classList.add('book_bg-white');
        }
        return false;
    }
}
for (let i = 0;i < bcolor.length;i++){
    bcolor[i].onclick = function() {
        bs.classList.remove('book_color-whitesmoke','book_color-gray','book_color-black');
        if (bcolor[i].classList.contains('text_color_black')){
            bs.classList.add('book_color-black');
        } else if (bcolor[i].classList.contains('text_color_gray')){
            bs.classList.add('book_color-gray');
        } else if (bcolor[i].classList.contains('text_color_whitesmoke')){
            bs.classList.add('book_color-whitesmoke');
        }
        return false;
    }
}
/*function check(name,book){
for (let i = 0;i < name.length;i++){
    name[i].onclick = function() {
        book.classList.remove('book_fs-small','book_fs-big');
        if (name[i].classList.contains('font-size_small')){
            book.parentElement.classList.add('book_fs-small');
        } else if (name[i].classList.contains('font-size_big')){
            book.parentElement.classList.add('book_fs-big');
        }
        return false;
    }
}
}*/
