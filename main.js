var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


color = "black";
widthLine = 2;

canvas.addEventListener("mouseDown", myMouseDown);

function myMouseDown(e) {
color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.linewidth = widthLine;
       ctx.arc(PositionMouseX, PositionMouseY, radius, 0, 2 * Math.PI );
       ctx.stroke();
    }
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
