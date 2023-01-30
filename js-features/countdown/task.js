const timer = document.getElementById("timer"); 
console.log(timer.textContent)
let timeCurrent = timer.textContent
function timeout() {
    timeCurrent--;
    timer.textContent = timeCurrent; 
    console.log(timeCurrent)
    if (timeCurrent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(startTimer);
    }
}
const startTimer = setInterval(timeout,1000)
