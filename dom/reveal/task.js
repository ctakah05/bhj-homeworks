const rev = document.querySelectorAll('.reveal');
window.onscroll = function() {
    for (let i = 0;i<rev.length;i++){
        vis(rev[i])
        console.log(rev[i])
    }
}
function vis(f){
    console.log(f)
    const {top,bottom} = f.getBoundingClientRect()
    if ((bottom < 0) || (top > window.innerHeight)) {
        f.classList.remove('reveal_active')
        console.log('false')
    } else {
        f.classList.add('reveal_active')
        console.log('active')
    }
}
