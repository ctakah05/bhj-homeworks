const clickTotal = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
image.onmousedown = function() {
    image.width = 300;
    clickTotal.textContent++;
}
image.onmouseup = function() {
    image.width = 200;
}
