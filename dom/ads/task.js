const rc = document.querySelectorAll('.rotator__case');
function circleWord (f) {
for (let i=0; i < f.length; i++){
    let speed = f[i].getAttribute("data-speed");
    setTimeout(() => {
    let color = f[i].getAttribute("data-color");
    clearActive(f);
    f[i].classList.toggle('rotator__case_active');
    f[i].style.color = color;
    },speed)
 }
// circleWord(rc);
}
function clearActive (f){
    for (let i=0;i<f.length;i++){
        console.log(f);
        f[i].classList.remove('rotator__case_active');
    }
}
circleWord(rc);