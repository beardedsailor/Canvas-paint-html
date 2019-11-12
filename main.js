var canvas = document.getElementById("demo");
var context = canvas.getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
var mouseClicked = false;
var mouseReleased = true;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keypress", clear, false);

var e;
function onMouseClick(e) {
    mouseClicked = !mouseClicked;

}


function getRandomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clear(e){
    var keyCode = e.keyCode;
    if(keyCode == 99){
        location.reload(true);
       
    }

}


function onMouseMove(e) {
    if (mouseClicked) {
        context.beginPath();
        context.arc(e.clientX, e.clientY, 7.5, 0, Math.PI * 2, false);
        context.lineWidth = 5;
        context.strokeStyle = getRandomColor();
        context.stroke();
    }

}

