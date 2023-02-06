const rev = document.querySelectorAll('.reveal');
window.onscroll = function() {
    for (let i = 0;i<rev.length;i++){
        vis(rev[i])
        console.log(rev[i])
    }
}
function vis(f){
    const { innerHeight } = window;
    const { top } = f.getBoundingClientRect();
    if (top < innerHeight && top > 0) {
        f.classList.add("reveal_active");
    } else {
        f.classList.remove("reveal_active");
    }
}
