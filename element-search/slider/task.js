const img = document.querySelectorAll('.slider__item')
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const dot = document.querySelectorAll('.slider__dot')
let curIndex = 0;
function checkIndex(){
    for (let i=curIndex ; i < img.length ; i++) {
        console.log('in check index');
        if (img[i].classList.contains('slider__item_active')) {
            console.log('search img index', i);
            img[i].classList.remove('slider__item_active');
            dot[i].classList.remove('slider__dot_active');
            return i;
        }
        alert('Что то пошло не так');
    }
}

//function prev(index) {}
function nextImg(where,index){
    console.log('enter in nextImg')
    if (where === 'next'){
        index++;
        if (index === img.length){ 
            return 0;
        }
    } else if (where === 'prev'){
        index--;
        if (index < 0){ 
            return (img.length - 1);
        }
    } else {

    }
    console.log(index)
    return index;
}

next.onclick = function() {
    console.log('next click')
    curIndex = nextImg('next',checkIndex());
    img[curIndex].classList.add('slider__item_active');
    dot[curIndex].classList.add('slider__dot_active');
}
prev.onclick = function() {
    console.log('next click')
    curIndex = nextImg('prev',checkIndex());
    img[curIndex].classList.add('slider__item_active');
    dot[curIndex].classList.add('slider__dot_active');
}
for (let i = 0; i < dot.length; i++){
    dot[i].onclick = function() {
        console.log('dot click')
        checkIndex()
        curIndex = i;
        img[curIndex].classList.add('slider__item_active');
        dot[curIndex].classList.add('slider__dot_active');
    }

}
